using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Contents
{
    public class Details
    {
        public class Query : IRequest<Result<Content>>
        {
            public Guid Id { get; set; }
            public class Handler : IRequestHandler<Query, Result<Content>>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<Content>> Handle(Query request, CancellationToken cancellationToken)
                {
                    var content = await _context.Contents
                    .Include(q => q.Article)
                    .Where(c => c.Id == request.Id)
                    .FirstOrDefaultAsync() ?? throw new Exception("Content Not found");
                    return Result<Content>.Success(content);
                }
            }
        }
    }
}