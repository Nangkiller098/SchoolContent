using Domain;
using MediatR;
using Persistence;

namespace Application.Contents
{
    public class Details
    {
        public class Query : IRequest<Content>
        {
            public int Id { get; set; }
            public class Handler : IRequestHandler<Query, Content>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Content> Handle(Query request, CancellationToken cancellationToken)
                {
                    return await _context.Contents.FindAsync(request.Id);

                }
            }
        }
    }
}