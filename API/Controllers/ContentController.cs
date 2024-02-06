using Application.Contents;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ContentController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMediator _mediator;
        public ContentController(DataContext context, IMediator mediator)
        {
            _mediator = mediator;
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<List<Content>>> GetContents()
        {
            return await _mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Content>> GetContent(int id)
        {
            return await _context.Contents.FindAsync(id);
        }
    }
}