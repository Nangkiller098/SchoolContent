using Domain;
using MediatR;
using Persistence;

namespace Application.Articles
{
    public class Create
    {
        public class Command : IRequest
        {
            public Article Article { get; set; }
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
                _context.Articles.Add(request.Article);
                await _context.SaveChangesAsync();
            }
        }
    }
}