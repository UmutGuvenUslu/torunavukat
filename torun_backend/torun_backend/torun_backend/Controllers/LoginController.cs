using Microsoft.AspNetCore.Mvc;
using torun_backend.Services;

namespace torun_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginService _loginService;

        public LoginController(LoginService loginService)
        {
            _loginService = loginService;
        }

        // POST: api/login
        [HttpPost]
        public IActionResult Login([FromBody] LoginDto loginRequest)
        {
            // Gelen verinin boş olup olmadığını kontrol ediyoruz
            if (loginRequest == null || string.IsNullOrEmpty(loginRequest.Name) || string.IsNullOrEmpty(loginRequest.Password))
            {
                return BadRequest(new { message = "Kullanıcı adı ve şifre boş bırakılamaz." }); // 400 Bad Request
            }

            // Servisteki Login metoduna DTO'dan gelen bilgileri gönderiyoruz
            bool isSuccess = _loginService.Login(loginRequest.Name, loginRequest.Password);

            if (isSuccess)
            {
                // Giriş başarılıysa 200 OK dönüyoruz
                return Ok(new { message = "Giriş başarılı." });
            }

            // Başarısızsa 401 Unauthorized (Yetkisiz) hatası dönüyoruz
            return Unauthorized(new { message = "Kullanıcı adı veya şifre hatalı." });
        }
    }

    // Dışarıdan gelecek JSON verisini karşılayacak model. 
    // İstersen bu sınıfı projedeki "Models" veya "DTOs" klasörüne de taşıyabilirsin.
    public class LoginDto
    {
        public string Name { get; set; }
        public string Password { get; set; }
    }
}