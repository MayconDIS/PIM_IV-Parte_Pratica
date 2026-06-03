using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NexTI_API.Models
{
    public class Fase
    {
        [Key]
        [MaxLength(20)]
        public string CodigoFase { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Descricao { get; set; } = string.Empty;

        public ICollection<Flashcard> Flashcards { get; set; } = new List<Flashcard>();
    }
}
