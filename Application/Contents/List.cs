using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Contents
{
    public class List
    {
        public class Query : IRequest<Result<List<Content>>> { }
        public class Handler : IRequestHandler<Query, Result<List<Content>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Content>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Content>>.Success(await _context.Contents
                .Include(c => c.Article)
                .Where(c => c.Status == true)
                .ToListAsync(cancellationToken));
            }
        }
    }
}