using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace torun_backend.Entities
{
    [Table("translations")]
    public class Translation:IEntitiy<int>
    {
        [Key]
        [Column("id")]
        public int Id { get; set; } // Otomatik artan ID (SERIAL)

        [Required]
        [MaxLength(100)]
        [ForeignKey("PageField")]
        [Column("fieldid")]
        public string FieldId { get; set; }
        public PageField PageField { get; set; }

        [Required]
        [MaxLength(10)]
        [Column("languagecode")]
        public string LanguageCode { get; set; } // "tr", "fr", "en"

        // --- Statik Alanlar İçin ---
        [Column("textvalue")]
        public string? TextValue { get; set; }
        [MaxLength(500)]
        [Column("imageurl")]
        public string? ImageUrl { get; set; }

        // --- Liste Öğeleri İçin ---
        [MaxLength(255)]
        [Column("titlevalue")]
        public string? TitleValue { get; set; }
        [Column("descriptionvalue")]
        public string? DescriptionValue { get; set; }
    }
}
