using Application.Contents;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ContentController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetContents()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContent(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [HttpPost]
        public async Task<ActionResult<Content>> CreateContent(Content content)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Content = content }));

        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Content>> EditContent(Guid id, Content content)
        {
            content.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Content = content }));

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Content>> RemoveContent(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));

        }
    }
}