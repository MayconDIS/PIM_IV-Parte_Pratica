using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexTI_API.Models
{
    [Table("tb_areas_conhecimento")]
    public class AreaConhecimento
    {
        [Key]
        [Column("id_area")]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("nome_area")]
        public string NomeArea { get; set; } = string.Empty;

        public ICollection<Questao> Questoes { get; set; } = new List<Questao>();
    }
}
