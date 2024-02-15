using Application.Dto;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Contents
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Content Content { get; set; }
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
                var content = await _context.Contents.FindAsync(request.Content.Id);
                request.Content.CreateAt = content.CreateAt;
                _mapper.Map(request.Content, content);
                await _context.SaveChangesAsync();
            }
        }
    }
}