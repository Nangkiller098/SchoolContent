using MediatR;
using Persistence;

namespace Application.Contents
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var content = await _context.Contents.FindAsync(request.Id);
                _context.Remove(content);
                await _context.SaveChangesAsync();

            }
        }
    }
}