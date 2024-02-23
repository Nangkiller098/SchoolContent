namespace Domain
{
    public class Article
    {
        public int Id { get; set; }
        public string ArticleName { get; set; }
        public bool Status { get; set; }
        public List<Content> Contents { get; set; } = [];
        // public ICollection<Content> Contents { get; set; } = [];
        // public ICollection<Category> Categories { get; set; }
        public List<Category> Categories { get; set; } = [];
    }
}