using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexTI_API.Models
{
    [Table("tb_provas")]
    public class Prova
    {
        [Key]
        [Column("id_prova")]
        public int Id { get; set; }

        [Column("ano")]
        public int Ano { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("tipo")]
        public string Tipo { get; set; } = string.Empty;

        public ICollection<Questao> Questoes { get; set; } = new List<Questao>();
    }
}
