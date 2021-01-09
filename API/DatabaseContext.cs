using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API {
  public class DatabaseContext : DbContext {

    public DbSet<User> User {get; set;}

    public DatabaseContext (DbContextOptions<DatabaseContext> options) : base (options) { }

    protected override void OnModelCreating (ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>()
        .ToTable("User")
        .HasKey(u => u.ID);
    }

  }
}
