

namespace Application.Dto
{
    public class ContentDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateModify { get; set; } = DateTime.Now;
        public bool Status { get; set; }
    }
}