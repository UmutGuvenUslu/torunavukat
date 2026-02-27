using torun_backend.Entities;

namespace torun_backend.Services
{
    public class BlogService : IHomeService<Blog, int>
    {
        private readonly AppDbContext _context;

        public BlogService(AppDbContext context)
        {
            _context = context;
        }

        public List<Blog> GetAll()
        {
            return _context.Blogs.ToList();
        }

        public Blog GetById(int id)
        {
            return _context.Blogs.FirstOrDefault(t => t.Id == id);
        }

        public Blog Add(Blog entity)
        {
            _context.Blogs.Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public Blog Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return null;

            _context.Blogs.Remove(entity);
            _context.SaveChanges();
            return entity;
        }

        public Blog Update(Blog entity)
        {
            var degisecek = _context.Blogs.FirstOrDefault(i => i.Id == entity.Id);
            if (degisecek == null) return null;

            degisecek.ImageUrl = entity.ImageUrl;
            degisecek.IsPublished = entity.IsPublished;
            // CreatedAt genellikle güncellenmez, ancak gerekirse buraya eklenebilir.

            _context.SaveChanges();
            return degisecek;
        }
    }
}
