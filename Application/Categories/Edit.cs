using Application.Core;
using AutoMapper;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Categories
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Domain.Category Category { get; set; }
        }
        public class COmmandValidator : AbstractValidator<Command>
        {
            public COmmandValidator()
            {
                RuleFor(x => x.Category).SetValidator(new CategoryValidator());
            }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var category = await _context.Categories.FindAsync(request.Category.Id);
                _mapper.Map(request.Category, category);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Failed to update category");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}