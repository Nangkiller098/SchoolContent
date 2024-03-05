using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Articles
{
    public class Details
    {
        public class Query : IRequest<Result<Article>>
        {
            public Guid Id { get; set; }
            public class Handler : IRequestHandler<Query, Result<Article>>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<Article>> Handle(Query request, CancellationToken cancellationToken)
                {
                    var article = await _context.Articles
                    .Include(q => q.Category)
                    .Where(c => c.Id == request.Id)
                    .FirstOrDefaultAsync() ?? throw new Exception("Article Not Found");
                    return Result<Article>.Success(article);
                }
            }
        }
    }
}