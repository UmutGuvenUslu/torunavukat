using Microsoft.AspNetCore.Mvc;

namespace torun_backend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public string Index()
        {
            string deneme = "deneme";
            return deneme;
        }
    }
}
