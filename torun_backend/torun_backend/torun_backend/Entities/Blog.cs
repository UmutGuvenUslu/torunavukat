using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace torun_backend.Entities
{
    [Table("blogs")]
    public class Blog:IEntitiy<int>
    {
        [Key]
        [Column("id")]
        public int Id { get; set; } 

        [MaxLength(500)]
        [Column("imageurl")]
        public string ImageUrl { get; set; } 
        [Column("createdat")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        [Column("ispublished")]
        public bool IsPublished { get; set; } = true;

        // İlişki: Bir blog yazısının birden fazla dilde çevirisi vardır
        public ICollection<BlogTranslation> Translations { get; set; } = new List<BlogTranslation>();
    }
}
