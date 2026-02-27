using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace torun_backend.Entities
{
    [Table("pages")]
    public class Page : IEntitiy<string>
    {
        [Key]
        [MaxLength(50)]
        [Column("id")]
        public string Id { get; set; } // Örn: "home", "cabinet"

        [Required]
        [MaxLength(100)]
        [Column("name")]
        public string Name { get; set; } // Örn: "Ana Sayfa"

        // İlişki: Bir sayfanın birden fazla alanı (field) vardır
        public ICollection<PageField> Fields { get; set; } = new List<PageField>();
    }
}

