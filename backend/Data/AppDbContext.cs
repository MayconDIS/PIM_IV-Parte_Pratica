using Microsoft.EntityFrameworkCore;
using NexTI_API.Models;

namespace NexTI_API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Fase> Fases { get; set; }
        public DbSet<Flashcard> Flashcards { get; set; }
        public DbSet<ProgressoFlashcard> Progresso_Flashcards { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Composite Key for ProgressoFlashcard
            modelBuilder.Entity<ProgressoFlashcard>()
                .HasKey(p => new { p.UsuarioId, p.FlashcardId });

            // Unique Constraints for Usuario
            modelBuilder.Entity<Usuario>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<Usuario>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
    }
}
