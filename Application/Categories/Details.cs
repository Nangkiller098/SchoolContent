using Application.Core;
using MediatR;
using Persistence;

namespace Application.Categories
{
    public class Details
    {

        public class Query : IRequest<Result<Domain.Category>>
        {
            public Guid Id { get; set; }
            public class Handler : IRequestHandler<Query, Result<Domain.Category>>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<Domain.Category>> Handle(Query request, CancellationToken cancellationToken)
                {
                    var category = await _context.Categories.FindAsync(request.Id);
                    return Result<Domain.Category>.Success(category);
                }
            }
        }

    }
}