using torun_backend.Entities;

namespace torun_backend.Services
{
    public class BlogTranslationService : IHomeService<BlogTranslation, int>
    {
        private readonly AppDbContext _context;

        public BlogTranslationService(AppDbContext context)
        {
            _context = context;
        }

        public List<BlogTranslation> GetAll()
        {
            return _context.BlogTranslations.ToList();
        }

        public BlogTranslation GetById(int id)
        {
            return _context.BlogTranslations.FirstOrDefault(t => t.Id == id);
        }

        public BlogTranslation Add(BlogTranslation entity)
        {
            _context.BlogTranslations.Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public BlogTranslation Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return null;

            _context.BlogTranslations.Remove(entity);
            _context.SaveChanges();
            return entity;
        }

        public BlogTranslation Update(BlogTranslation entity)
        {
            var degisecek = _context.BlogTranslations.FirstOrDefault(i => i.Id == entity.Id);
            if (degisecek == null) return null;

            degisecek.Title = entity.Title;
            degisecek.Content = entity.Content;
            degisecek.Slug = entity.Slug;

            _context.SaveChanges();
            return degisecek;
        }
    }
}
