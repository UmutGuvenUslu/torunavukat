using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace torun_backend.Entities
{
    [Table("pagefields")]
    public class PageField:IEntitiy<string>
    {
        [Key]
        [MaxLength(100)]
        [Column("id")]
        public string Id { get; set; } // Örn: "home_hero_kicker", "cab_services"

        [Required]
        [MaxLength(50)]
        [ForeignKey("Page")]
        [Column("pageid")]
        public string PageId { get; set; }
        public Page Page { get; set; }

        [Required]
        [MaxLength(20)]
        [Column("type")]
        public string Type { get; set; } // "static" veya "list"

        [Required]
        [MaxLength(20)]
        [Column("category")]
        public string Category { get; set; } // "header" veya "content"

        [Required]
        [MaxLength(100)]
        [Column("title")]
        public string Title { get; set; } // Örn: "Üst Başlık"
        [Column("description")]
        public string Description { get; set; }
        [Column("hasimage")]
        public bool HasImage { get; set; } = false;

        // İlişki: Bir alanın birden fazla dilde çevirisi vardır
        public ICollection<Translation> Translations { get; set; } = new List<Translation>();
    }
}
