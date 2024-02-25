using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Categories
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Domain.Category Category { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var category = await _context.Categories.FindAsync(request.Category.Id);
                _mapper.Map(request.Category, category);
                await _context.SaveChangesAsync();
            }
        }
    }
}