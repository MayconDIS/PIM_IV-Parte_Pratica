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
        public DbSet<AreaConhecimento> AreasConhecimento { get; set; }
        public DbSet<Prova> Provas { get; set; }
        public DbSet<Questao> Questoes { get; set; }
        public DbSet<Alternativa> Alternativas { get; set; }

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

            // Many-to-many relationship tb_prova_questao
            modelBuilder.Entity<Questao>()
                .HasMany(q => q.Provas)
                .WithMany(p => p.Questoes)
                .UsingEntity<System.Collections.Generic.Dictionary<string, object>>(
                    "tb_prova_questao",
                    j => j.HasOne<Prova>().WithMany().HasForeignKey("id_prova"),
                    j => j.HasOne<Questao>().WithMany().HasForeignKey("id_questao")
                );
        }
    }
}
