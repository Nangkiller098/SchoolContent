namespace Domain
{
    public class Article
    {
        public Guid Id { get; set; }
        public string ArticleName { get; set; }
        public bool Status { get; set; }
        public ICollection<Content> Contents { get; set; } = [];
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }

    }
}