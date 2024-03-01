using Application.Contents;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ContentController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Content>>> GetContents()
        {
            return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Content>> GetContent(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
        [HttpPost]
        public async Task<ActionResult<Content>> CreateContent(Content content)
        {
            await Mediator.Send(new Create.Command { Content = content });
            return Ok();
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Content>> EditContent(Guid id, Content content)
        {
            content.Id = id;
            await Mediator.Send(new Edit.Command { Content = content });
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Content>> RemoveContent(Guid id)
        {
            await Mediator.Send(new Delete.Command { Id = id });
            return Ok();
        }
    }
}