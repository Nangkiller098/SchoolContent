using Domain;
using MediatR;
using Persistence;

namespace Application.Articles
{
    public class Details
    {
        public class Query : IRequest<Article>
        {
            public int Id { get; set; }
            public class Handler : IRequestHandler<Query, Article>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Article> Handle(Query request, CancellationToken cancellationToken)
                {
                    return await _context.Articles.FindAsync(request.Id);
                }
            }
        }
    }
}