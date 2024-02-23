namespace Domain
{
    public class Content
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime DateModify { get; set; } = DateTime.Now;
        public bool Status { get; set; }
        public int ArticleId { get; set; }
        public Article Article { get; set; }
    }
}