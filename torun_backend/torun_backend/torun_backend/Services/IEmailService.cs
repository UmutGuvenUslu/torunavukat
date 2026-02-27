using torun_backend.Entities;

namespace torun_backend.Services
{
    public interface IEmailService
    {
        Task<bool> SendContactEmailAsync(ContactFormDto formDto);
    }
}
