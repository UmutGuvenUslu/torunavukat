using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace torun_backend.Entities
{
    [Table("blogtranslations")]
    public class BlogTranslation: IEntitiy<int>
    {
        [Key]
        [Column("id")]
        public int Id { get; set; } // Otomatik artan ID

        [Required]
        [ForeignKey("Blog")]
        [Column("blogid")]
        public int BlogId { get; set; }
        public Blog Blog { get; set; }

        [Required]
        [MaxLength(10)]
        [Column("languagecode")]
        public string LanguageCode { get; set; } // "tr", "fr", "en"

        [Required]
        [MaxLength(255)]
        [Column("title")]
        public string Title { get; set; }

        [Required]
        [Column("content")]
        public string Content { get; set; } // HTML zengin metin (Rich Text)

        [Required]
        [MaxLength(255)]
        [Column("slug")]
        public string Slug { get; set; } // SEO URL (Örn: "yeni-hukuk-kurallari")
    }
}
