namespace Domain
{
    public class Content
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreateAt { get; set; } = DateTime.Now;
        public string Address { get; set; }
        public string GoogleMap { get; set; }
        public string Telephone { get; set; }

        public bool Status { get; set; }
    }
}