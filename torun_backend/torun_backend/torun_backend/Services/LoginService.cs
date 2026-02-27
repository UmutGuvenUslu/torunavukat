using torun_backend.Entities;

namespace torun_backend.Services
{
    public class LoginService
    {
        private readonly AppDbContext _context;
        public LoginService(AppDbContext context)
        {
            _context = context;
        }

        public bool Login(string name, string password)
        {
            var user = _context.Logins.FirstOrDefault(l => l.name == name && l.password == password);
            return user != null;
        }
    }
}
