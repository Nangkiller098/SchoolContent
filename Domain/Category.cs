namespace Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public int ArticleId { get; set; }
        public Article Article { get; set; }
    }
}