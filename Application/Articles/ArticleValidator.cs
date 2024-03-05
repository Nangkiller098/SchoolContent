using Domain;
using FluentValidation;

namespace Application.Articles
{
    public class ArticleValidator : AbstractValidator<Article>
    {
        public ArticleValidator()
        {
            RuleFor(x => x.ArticleName).NotEmpty();
            RuleFor(x => x.CategoryId).NotEmpty();
        }
    }
}