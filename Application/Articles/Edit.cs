using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Articles
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Article Article { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.FindAsync(request.Article.Id);
                _mapper.Map(request.Article, article);
                await _context.SaveChangesAsync();
            }
        }
    }
}