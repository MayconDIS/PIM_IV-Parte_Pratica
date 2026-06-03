using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexTI_API.Models
{
    [Table("tb_alternativas")]
    public class Alternativa
    {
        [Key]
        [Column("id_alternativa")]
        public int Id { get; set; }

        [Column("id_questao")]
        public int IdQuestao { get; set; }

        [Required]
        [Column("texto")]
        public string Texto { get; set; } = string.Empty;

        [Column("is_correta")]
        public bool IsCorreta { get; set; }

        [ForeignKey("IdQuestao")]
        public Questao? Questao { get; set; }
    }
}
