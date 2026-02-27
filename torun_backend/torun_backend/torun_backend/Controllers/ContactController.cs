using Microsoft.AspNetCore.Mvc;
using torun_backend.Entities;
using torun_backend.Services;
using torun_backend.Entities;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("send")]
        public async Task<IActionResult> SendMessage([FromBody] ContactFormDto formDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Lütfen tüm alanları eksiksiz doldurun.");
            }

            bool isSuccess = await _emailService.SendContactEmailAsync(formDto);

            if (isSuccess)
            {
                return Ok(new { message = "Mesajınız başarıyla gönderildi." });
            }

            return StatusCode(500, new { message = "Mesaj gönderilirken sunucu kaynaklı bir hata oluştu." });
        }
    }
}