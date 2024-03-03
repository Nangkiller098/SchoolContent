using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Contents
{
    public class List
    {
        public class Query : IRequest<List<Content>> { }
        public class Handler : IRequestHandler<Query, List<Content>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Content>> Handle(Query request, CancellationToken cancellationToken)
            {
                var article = _context.Articles.ToListAsync();
                return await _context.Contents
                .Include(c => c.Article)
                .Where(c => c.Status == true)
                .ToListAsync();
            }
        }
    }
}