using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using torun_backend.Entities;

public class AppDbContext : DbContext
{
    
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Tablolarımız
        public DbSet<Page> Pages { get; set; }
        public DbSet<PageField> PageFields { get; set; }
        public DbSet<Translation> Translations { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<BlogTranslation> BlogTranslations { get; set; }
        public DbSet<Login> Logins { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ==========================================
            // KISITLAMALAR VE İLİŞKİLER (Fluent API)
            // ==========================================

            modelBuilder.Entity<Login>()
                .HasIndex(l => l.name)
                .IsUnique();
        // 1. Bir Alan (Field) için aynı dil kodundan (LanguageCode) sadece 1 tane olabilir.
        modelBuilder.Entity<Translation>()
                .HasIndex(t => new { t.FieldId, t.LanguageCode })
                .IsUnique();

            // 2. Bir Blog yazısı için aynı dil kodundan sadece 1 çeviri olabilir.
            modelBuilder.Entity<BlogTranslation>()
                .HasIndex(bt => new { bt.BlogId, bt.LanguageCode })
                .IsUnique();

            // 3. Blog Slug (URL) değeri benzersiz olmalıdır (Aynı URL'den iki yazı olamaz).
            modelBuilder.Entity<BlogTranslation>()
                .HasIndex(bt => bt.Slug)
                .IsUnique();

            // 4. Silme Davranışları (Cascade Delete)
            // Bir sayfa silinirse, altındaki alanlar da silinsin
            modelBuilder.Entity<PageField>()
                .HasOne(pf => pf.Page)
                .WithMany(p => p.Fields)
                .HasForeignKey(pf => pf.PageId)
                .OnDelete(DeleteBehavior.Cascade);

            // Bir alan silinirse, altındaki çeviriler de silinsin
            modelBuilder.Entity<Translation>()
                .HasOne(t => t.PageField)
                .WithMany(pf => pf.Translations)
                .HasForeignKey(t => t.FieldId)
                .OnDelete(DeleteBehavior.Cascade);

            // Bir blog silinirse, altındaki blog çevirileri de silinsin
            modelBuilder.Entity<BlogTranslation>()
                .HasOne(bt => bt.Blog)
                .WithMany(b => b.Translations)
                .HasForeignKey(bt => bt.BlogId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

