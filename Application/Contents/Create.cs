using Domain;
using MediatR;
using Persistence;

namespace Application.Contents
{
    public class Create
    {
        public class Command : IRequest
        {
            public Content Content { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Contents.Add(request.Content);
                await _context.SaveChangesAsync();

            }
        }
    }
}