using System.Net;
using System.Net.Mail;
using torun_backend.Entities;


namespace torun_backend.Services
{
    public class SmtpEmailService : IEmailService
    {
        private readonly IConfiguration _configuration;

        public SmtpEmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> SendContactEmailAsync(ContactFormDto formDto)
        {
            try
            {
                // appsettings.json'dan bilgileri çekiyoruz
                string host = _configuration["EmailSettings:Host"];
                int port = int.Parse(_configuration["EmailSettings:Port"]);
                string username = _configuration["EmailSettings:Username"];
                string password = _configuration["EmailSettings:Password"];
                string toEmail = _configuration["EmailSettings:ToEmail"]; 

                // Estetik HTML Şablonu
                string mailBody = $@"
                    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);'>
                        <div style='background-color: #0056b3; color: white; padding: 20px; text-align: center;'>
                            <h2 style='margin: 0;'>Yeni İletişim Mesajı</h2>
                        </div>
                        <div style='padding: 20px; background-color: #fcfcfc;'>
                            <p style='color: #555; font-size: 16px;'>Web sitenizden yeni bir iletişim formu dolduruldu. Detaylar aşağıdadır:</p>
                            <table style='width: 100%; border-collapse: collapse; margin-top: 15px;'>
                                <tr>
                                    <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%; color: #333;'>Ad Soyad</td>
                                    <td style='padding: 10px; border-bottom: 1px solid #eee; color: #555;'>{formDto.FirstName} {formDto.LastName}</td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;'>Telefon</td>
                                    <td style='padding: 10px; border-bottom: 1px solid #eee; color: #555;'>{formDto.PhoneNumber}</td>
                                </tr>
                                <tr>
                                    <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;'>E-Posta</td>
                                    <td style='padding: 10px; border-bottom: 1px solid #eee; color: #555;'>{formDto.Email}</td>
                                </tr>
                            </table>
                            <h3 style='color: #333; margin-top: 25px; border-bottom: 2px solid #0056b3; padding-bottom: 5px; display: inline-block;'>Mesaj İçeriği:</h3>
                            <div style='background-color: #fff; padding: 15px; border-left: 4px solid #0056b3; color: #444; line-height: 1.6;'>
                                {formDto.Message}
                            </div>
                        </div>
                    </div>";

                using (var client = new SmtpClient(host, port))
                {
                    client.Credentials = new NetworkCredential(username, password);
                    client.EnableSsl = true;

                    var mailMessage = new MailMessage
                    {
                        From = new MailAddress(username, "İletişim Formu Sistemi"),
                        Subject = $"Yeni Mesaj: {formDto.FirstName} {formDto.LastName}",
                        Body = mailBody,
                        IsBodyHtml = true
                    };

                    mailMessage.To.Add(toEmail);

                    await client.SendMailAsync(mailMessage);
                    return true;
                }
            }
            catch (Exception ex)
            {
                // Gerçek projede burada loglama yapılır (Örn: Serilog)
                Console.WriteLine($"Mail gönderme hatası: {ex.Message}");
                return false;
            }
        }
    }
}