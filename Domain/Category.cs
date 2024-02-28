namespace Domain
{
    public class Category
    {
        public Guid Id { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public ICollection<Article> Articles { get; set; } = [];
    }
}