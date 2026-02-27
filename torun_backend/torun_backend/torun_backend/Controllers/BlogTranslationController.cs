using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogTranslationController : ControllerBase
    {
        private readonly IHomeService<BlogTranslation, int> _translationService;

        public BlogTranslationController(IHomeService<BlogTranslation, int> translationService)
        {
            _translationService = translationService;
        }

        // GET: api/BlogTranslation
        [HttpGet]
        public IActionResult GetAll()
        {
            var translations = _translationService.GetAll();
            return Ok(translations);
        }

        // GET: api/BlogTranslation/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var translation = _translationService.GetById(id);
            if (translation == null)
            {
                return NotFound(new { message = "Blog çevirisi bulunamadı." });
            }
            return Ok(translation);
        }

        // POST: api/BlogTranslation
        [HttpPost]
        public IActionResult Add([FromBody] BlogTranslation translation)
        {
            if (translation == null)
            {
                return BadRequest("Çeviri verisi boş olamaz.");
            }

            var createdTranslation = _translationService.Add(translation);

            return CreatedAtAction(nameof(GetById), new { id = createdTranslation.Id }, createdTranslation);
        }

        // PUT: api/BlogTranslation/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] BlogTranslation translation)
        {
            if (translation == null || id != translation.Id)
            {
                return BadRequest("Geçersiz çeviri verisi veya ID uyuşmazlığı.");
            }

            var updatedTranslation = _translationService.Update(translation);

            if (updatedTranslation == null)
            {
                return NotFound(new { message = "Güncellenecek çeviri bulunamadı." });
            }

            return Ok(updatedTranslation);
        }

        // DELETE: api/BlogTranslation/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deletedTranslation = _translationService.Delete(id);
            if (deletedTranslation == null)
            {
                return NotFound(new { message = "Silinecek çeviri bulunamadı." });
            }

            return Ok(new { message = "Çeviri başarıyla silindi.", deletedTranslation });
        }
    }
}