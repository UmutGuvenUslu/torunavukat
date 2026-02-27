using torun_backend.Entities;

namespace torun_backend.Services
{
    public class PageFieldService : IHomeService<PageField, string>
    {
        private readonly AppDbContext _context;

        public PageFieldService(AppDbContext context)
        {
            _context = context;
        }

        public List<PageField> GetAll()
        {
            return _context.PageFields.ToList();
        }

        public PageField GetById(string id)
        {
            return _context.PageFields.FirstOrDefault(t => t.Id == id);
        }

        public PageField Add(PageField entity)
        {
            _context.PageFields.Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public PageField Delete(string id)
        {
            var entity = GetById(id);
            if (entity == null) return null;

            _context.PageFields.Remove(entity);
            _context.SaveChanges();
            return entity;
        }

        public PageField Update(PageField entity)
        {
            var degisecek = _context.PageFields.FirstOrDefault(i => i.Id == entity.Id);
            if (degisecek == null) return null;

            degisecek.Title = entity.Title;
            degisecek.Description = entity.Description;
            degisecek.Type = entity.Type;
            degisecek.Category = entity.Category;
            degisecek.HasImage = entity.HasImage;

            _context.SaveChanges();
            return degisecek;
        }
    }
}