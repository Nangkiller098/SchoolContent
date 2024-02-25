using MediatR;
using Persistence;

namespace Application.Categories
{
    public class Details
    {

        public class Query : IRequest<Domain.Category>
        {
            public int Id { get; set; }
            public class Handler : IRequestHandler<Query, Domain.Category>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Domain.Category> Handle(Query request, CancellationToken cancellationToken)
                {
                    return await _context.Categories
                    .FindAsync(request.Id)
                    ;
                }
            }
        }

    }
}