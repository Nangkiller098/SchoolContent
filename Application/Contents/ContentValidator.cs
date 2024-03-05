using Domain;
using FluentValidation;

namespace Application.Contents
{
    public class ContentValidator : AbstractValidator<Content>
    {
        public ContentValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.ArticleId).NotEmpty();
        }
    }
}