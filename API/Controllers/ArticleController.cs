using Application.Articles;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticleController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Article>>> GetArticles()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [HttpPost]
        public async Task<ActionResult<Content>> CreateArticle(Article article)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Article = article }));
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Content>> EditArticle(Guid id, Article article)
        {
            article.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Article = article }));

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Content>> RemoveArticle(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));

        }
    }
}