
using Application.Categories;
using Application.Category;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class CategoryController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [HttpPost]
        public async Task<ActionResult<Category>> CreateCategory(Category category)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Category = category }));
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Category>> EditCategory(Guid id, Category category)
        {
            category.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Category = category }));

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Content>> RemoveCategory(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));

        }

    }
}