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
        public async Task<ActionResult<Content>> GetContent(int id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
    }
}