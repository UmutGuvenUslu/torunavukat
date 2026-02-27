using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        // Dependency Injection ile servisi içeri alıyoruz
        private readonly IHomeService<Blog, int> _blogService;

        public BlogController(IHomeService<Blog, int> blogService)
        {
            _blogService = blogService;
        }

        // GET: api/blog
        [HttpGet]
        public IActionResult GetAll()
        {
            var blogs = _blogService.GetAll();
            return Ok(blogs); // 200 OK
        }

        // GET: api/blog/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var blog = _blogService.GetById(id);
            if (blog == null)
            {
                return NotFound(new { message = "Blog bulunamadı." }); // 404 Not Found
            }
            return Ok(blog); // 200 OK
        }

        // POST: api/blog
        [HttpPost]
        public IActionResult Add([FromBody] Blog blog)
        {
            if (blog == null)
            {
                return BadRequest("Blog verisi boş olamaz."); // 400 Bad Request
            }

            var createdBlog = _blogService.Add(blog);

            // Best Practice: Yeni kayıt eklendiğinde 201 Created dönülür
            // ve yeni kaydın nerede (GetById url'sinde) olduğu belirtilir.
            return CreatedAtAction(nameof(GetById), new { id = createdBlog.Id }, createdBlog);
        }

        // PUT: api/blog/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Blog blog)
        {
            // Url'den gelen ID ile gövdeden gelen ID uyuşmuyor mu kontrolü
            if (blog == null || id != blog.Id)
            {
                return BadRequest("Geçersiz blog verisi veya ID uyuşmazlığı.");
            }

            var updatedBlog = _blogService.Update(blog);

            if (updatedBlog == null)
            {
                return NotFound(new { message = "Güncellenecek blog bulunamadı." });
            }

            return Ok(updatedBlog);
        }

        // DELETE: api/blog/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deletedBlog = _blogService.Delete(id);
            if (deletedBlog == null)
            {
                return NotFound(new { message = "Silinecek blog bulunamadı." });
            }

            return Ok(new { message = "Blog başarıyla silindi.", deletedBlog });
        }
    }
}