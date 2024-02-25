namespace Domain
{
    public class Article
    {
        public int Id { get; set; }
        public string ArticleName { get; set; }
        public bool Status { get; set; }
        public ICollection<Content> Contents { get; set; } = [];
        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}