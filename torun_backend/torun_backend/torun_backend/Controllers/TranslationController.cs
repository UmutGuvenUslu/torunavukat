using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TranslationController : ControllerBase
    {
        private readonly IHomeService<Translation, int> _translationService;

        public TranslationController(IHomeService<Translation, int> translationService)
        {
            _translationService = translationService;
        }

        // GET: api/Translation
        [HttpGet]
        public IActionResult GetAll()
        {
            var translations = _translationService.GetAll();
            return Ok(translations);
        }

        // GET: api/Translation/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var translation = _translationService.GetById(id);
            if (translation == null)
            {
                return NotFound(new { message = "Genel çeviri metni bulunamadı." });
            }
            return Ok(translation);
        }

        // POST: api/Translation
        [HttpPost]
        public IActionResult Add([FromBody] Translation translation)
        {
            if (translation == null)
            {
                return BadRequest("Çeviri verisi boş olamaz.");
            }

            var createdTranslation = _translationService.Add(translation);

            return CreatedAtAction(nameof(GetById), new { id = createdTranslation.Id }, createdTranslation);
        }

        // PUT: api/Translation/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Translation translation)
        {
            if (translation == null || id != translation.Id)
            {
                return BadRequest("Geçersiz veri veya ID uyuşmazlığı.");
            }

            var updatedTranslation = _translationService.Update(translation);

            if (updatedTranslation == null)
            {
                return NotFound(new { message = "Güncellenecek çeviri metni bulunamadı." });
            }

            return Ok(updatedTranslation);
        }

        // DELETE: api/Translation/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deletedTranslation = _translationService.Delete(id);
            if (deletedTranslation == null)
            {
                return NotFound(new { message = "Silinecek çeviri metni bulunamadı." });
            }

            return Ok(new { message = "Çeviri metni başarıyla silindi.", deletedTranslation });
        }
    }
}