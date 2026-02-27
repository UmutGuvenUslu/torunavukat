using torun_backend.Entities;

namespace torun_backend.Services
{
    public class TranslationService : IHomeService<Translation, int>
    {
        private readonly AppDbContext _context;

        public TranslationService(AppDbContext context)
        {
            _context = context;
        }

        public List<Translation> GetAll()
        {
            return _context.Translations.ToList();
        }

        public Translation GetById(int id)
        {
            return _context.Translations.FirstOrDefault(t => t.Id == id);
        }

        public Translation Add(Translation entity)
        {
            _context.Translations.Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public Translation Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return null;

            _context.Translations.Remove(entity);
            _context.SaveChanges();
            return entity;
        }

        public Translation Update(Translation entity)
        {
            var degisecek = _context.Translations.FirstOrDefault(i => i.Id == entity.Id);
            if (degisecek == null) return null;

            degisecek.TextValue = entity.TextValue;
            degisecek.TitleValue = entity.TitleValue;
            degisecek.DescriptionValue = entity.DescriptionValue;
            degisecek.ImageUrl = entity.ImageUrl;

            _context.SaveChanges();
            return degisecek;
        }
    }
}
