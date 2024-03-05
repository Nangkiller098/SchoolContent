using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Articles
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Article Article { get; set; }
        }
        public class COmmandValidator : AbstractValidator<Command>
        {
            public COmmandValidator()
            {
                RuleFor(x => x.Article).SetValidator(new ArticleValidator());
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
                var article = await _context.Articles.FindAsync(request.Article.Id);
                if (article == null) return null;
                _mapper.Map(request.Article, article);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Failed to update article");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}