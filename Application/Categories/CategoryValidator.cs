using System.Data;
using FluentValidation;

namespace Application.Categories
{
    public class CategoryValidator : AbstractValidator<Domain.Category>
    {
        public CategoryValidator()
        {
            RuleFor(x => x.CategoryName).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}