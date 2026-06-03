using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexTI_API.Models
{
    public class ProgressoFlashcard
    {
        public int UsuarioId { get; set; }
        public int FlashcardId { get; set; }

        public int Repeticoes { get; set; } = 0;
        public double IntervaloDias { get; set; } = 0;
        public double FatorFacilidade { get; set; } = 2.5;

        public DateTime DataProximaRevisao { get; set; } = DateTime.UtcNow.Date;

        [ForeignKey("UsuarioId")]
        public Usuario? Usuario { get; set; }

        [ForeignKey("FlashcardId")]
        public Flashcard? Flashcard { get; set; }
    }
}
