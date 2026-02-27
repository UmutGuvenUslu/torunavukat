using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace torun_backend.Entities
{
    [Table("login")]
    public class Login
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        public string name { get; set; }
        public string password { get; set; }
    }
}
