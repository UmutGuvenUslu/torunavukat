using torun_backend.Entities;

namespace torun_backend.Services
{

    public class PageService : IHomeService<Page, string>
    {
        private readonly AppDbContext _context;

        public PageService(AppDbContext context)
        {
            _context = context;
        }

        public List<Page> GetAll()
        {
            return _context.Pages.ToList();
        }

        public Page GetById(string id)
        {
            return _context.Pages.FirstOrDefault(t => t.Id == id);
        }

        public Page Add(Page entity)
        {
            _context.Pages.Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public Page Delete(string id)
        {
            var entity = GetById(id);
            if (entity == null) return null;

            _context.Pages.Remove(entity);
            _context.SaveChanges();
            return entity;
        }

        public Page Update(Page entity)
        {
            var degisecek = _context.Pages.FirstOrDefault(i => i.Id == entity.Id);
            if (degisecek == null) return null;

            degisecek.Name = entity.Name;

            _context.SaveChanges();
            return degisecek;
        }
    }
}
    
