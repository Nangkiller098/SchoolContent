using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Content> Contents { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Category> Categories { get; set; }
        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(modelBuilder);
        //     modelBuilder.Entity<Article>()
        //     .HasMany(e => e.Categories)
        //     .WithOne(a => a.Article)
        //     .HasForeignKey(aa => aa.ArticleId)
        //     .HasPrincipalKey(e => e.Id);
        // }

    }
}