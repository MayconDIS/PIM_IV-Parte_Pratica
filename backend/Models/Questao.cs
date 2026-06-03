using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexTI_API.Models
{
    [Table("tb_questoes")]
    public class Questao
    {
        [Key]
        [Column("id_questao")]
        public int Id { get; set; }

        [Column("id_area")]
        public int IdArea { get; set; }

        [Required]
        [Column("enunciado")]
        public string Enunciado { get; set; } = string.Empty;

        [MaxLength(50)]
        [Column("origem")]
        public string? Origem { get; set; }

        [ForeignKey("IdArea")]
        public AreaConhecimento? Area { get; set; }

        public ICollection<Alternativa> Alternativas { get; set; } = new List<Alternativa>();
        public ICollection<Prova> Provas { get; set; } = new List<Prova>();
    }
}
