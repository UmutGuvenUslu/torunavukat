using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PageController : ControllerBase
    {
        private readonly IHomeService<Page, string> _pageService;

        public PageController(IHomeService<Page, string> pageService)
        {
            _pageService = pageService;
        }

        // GET: api/Page
        [HttpGet]
        public IActionResult GetAll()
        {
            var pages = _pageService.GetAll();
            return Ok(pages);
        }

        // GET: api/Page/hakkimizda
        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            var page = _pageService.GetById(id);
            if (page == null)
            {
                return NotFound(new { message = "Sayfa bulunamadı." });
            }
            return Ok(page);
        }

        // POST: api/Page
        [HttpPost]
        public IActionResult Add([FromBody] Page page)
        {
            if (page == null)
            {
                return BadRequest("Sayfa verisi boş olamaz.");
            }

            var createdPage = _pageService.Add(page);

            return CreatedAtAction(nameof(GetById), new { id = createdPage.Id }, createdPage);
        }

        // PUT: api/Page/hakkimizda
        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] Page page)
        {
            if (page == null || id != page.Id)
            {
                return BadRequest("Geçersiz veri veya ID uyuşmazlığı.");
            }

            var updatedPage = _pageService.Update(page);

            if (updatedPage == null)
            {
                return NotFound(new { message = "Güncellenecek sayfa bulunamadı." });
            }

            return Ok(updatedPage);
        }

        // DELETE: api/Page/hakkimizda
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var deletedPage = _pageService.Delete(id);
            if (deletedPage == null)
            {
                return NotFound(new { message = "Silinecek sayfa bulunamadı." });
            }

            return Ok(new { message = "Sayfa başarıyla silindi.", deletedPage });
        }
    }
}