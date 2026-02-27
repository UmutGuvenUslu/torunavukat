using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PageFieldController : ControllerBase
    {
        // ID tipi string olduğu için IHomeService<PageField, string> olarak enjekte ediyoruz
        private readonly IHomeService<PageField, string> _pageFieldService;

        public PageFieldController(IHomeService<PageField, string> pageFieldService)
        {
            _pageFieldService = pageFieldService;
        }

        // GET: api/PageField
        [HttpGet]
        public IActionResult GetAll()
        {
            var pageFields = _pageFieldService.GetAll();
            return Ok(pageFields);
        }

        // GET: api/PageField/iletisim-baslik
        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            var pageField = _pageFieldService.GetById(id);
            if (pageField == null)
            {
                return NotFound(new { message = "Sayfa alanı bulunamadı." });
            }
            return Ok(pageField);
        }

        // POST: api/PageField
        [HttpPost]
        public IActionResult Add([FromBody] PageField pageField)
        {
            if (pageField == null)
            {
                return BadRequest("Sayfa alanı verisi boş olamaz.");
            }

            var createdPageField = _pageFieldService.Add(pageField);

            return CreatedAtAction(nameof(GetById), new { id = createdPageField.Id }, createdPageField);
        }

        // PUT: api/PageField/iletisim-baslik
        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] PageField pageField)
        {
            // ID string olduğu için eşitlik kontrolünü buna göre yapıyoruz
            if (pageField == null || id != pageField.Id)
            {
                return BadRequest("Geçersiz veri veya ID uyuşmazlığı.");
            }

            var updatedPageField = _pageFieldService.Update(pageField);

            if (updatedPageField == null)
            {
                return NotFound(new { message = "Güncellenecek sayfa alanı bulunamadı." });
            }

            return Ok(updatedPageField);
        }

        // DELETE: api/PageField/iletisim-baslik
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var deletedPageField = _pageFieldService.Delete(id);
            if (deletedPageField == null)
            {
                return NotFound(new { message = "Silinecek sayfa alanı bulunamadı." });
            }

            return Ok(new { message = "Sayfa alanı başarıyla silindi.", deletedPageField });
        }
    }
}