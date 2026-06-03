using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexTI_API.Models
{
    public class Flashcard
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string CodigoFase { get; set; } = string.Empty;

        [Required]
        public string Frente { get; set; } = string.Empty;

        [Required]
        public string Verso { get; set; } = string.Empty;

        [MaxLength(255)]
        public string? Dica { get; set; }

        [ForeignKey("CodigoFase")]
        public Fase? Fase { get; set; }

        public ICollection<ProgressoFlashcard> Progressos { get; set; } = new List<ProgressoFlashcard>();
    }
}
