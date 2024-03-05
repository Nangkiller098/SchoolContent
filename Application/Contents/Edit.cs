using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Contents
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Content Content { get; set; }
        }
        public class COmmandValidator : AbstractValidator<Command>
        {
            public COmmandValidator()
            {
                RuleFor(x => x.Content).SetValidator(new ContentValidator());
            }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var content = await _context.Contents.FindAsync(request.Content.Id);
                if (content == null) return null;
                request.Content.Status = true;
                _mapper.Map(request.Content, content);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Failed to update content");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}