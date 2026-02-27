using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using torun_backend.Entities;
using torun_backend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"), npgsqlOptions =>
    {
        // Baðlantý koparsa otomatik olarak tekrar denemesini saðlar
        npgsqlOptions.EnableRetryOnFailure(
            maxRetryCount: 5,
            maxRetryDelay: TimeSpan.FromSeconds(10),
            errorCodesToAdd: null);
    }));
    builder.Services.AddScoped<IHomeService<Blog,int>, BlogService>();
    builder.Services.AddScoped<IHomeService<BlogTranslation,int>, BlogTranslationService>();
    builder.Services.AddScoped<IHomeService<PageField, string>, PageFieldService>();
    builder.Services.AddScoped<IHomeService<Page, string>, PageService>();
    builder.Services.AddScoped<IHomeService<Translation, int>, TranslationService>();
    builder.Services.AddScoped<IEmailService, SmtpEmailService>();
    builder.Services.AddScoped<LoginService>();



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
