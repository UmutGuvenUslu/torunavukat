using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;

namespace torun_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IHomeService<BlogComponent> _service;

        public HomeController(IHomeService<BlogComponent> service)
        {
            _service = service;
        }

        
        [HttpGet]
        public IActionResult GetAll()
        {
            var data = _service.GetAll();
            return Ok(data);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _service.GetById(id);
            if (data == null) return NotFound();
            return Ok(data);
        }

        
        [HttpPost]
        public IActionResult Add([FromBody] BlogComponent model)
        {
            var added = _service.Add(model);
            return Ok(added);
        }

        // PUT: api/home
        [HttpPut("Update")]
        public IActionResult Update([FromBody] BlogComponent model)
        {
            var updated = _service.Update(model);
            if (updated == null) return NotFound();
            return Ok(updated);
        }

        // DELETE: api/home/5
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var deleted = _service.Delete(id);
            if (deleted == null) return NotFound();
            return Ok(deleted);
        }
    }
}
