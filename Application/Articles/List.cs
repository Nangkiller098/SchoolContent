using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Articles
{
    public class List
    {
        public class Query : IRequest<Result<List<Article>>>
        {
        }
        public class Handler : IRequestHandler<Query, Result<List<Article>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Result<List<Article>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Article>>
                .Success(await _context.Articles.Include(c => c.Category).ToListAsync(cancellationToken));
            }
        }
    }
}