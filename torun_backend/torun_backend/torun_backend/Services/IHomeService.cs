using torun_backend.Entities;

namespace torun_backend.Services
{
    public interface IHomeService<T, TId> where T : IEntitiy<TId>
    {
        List<T> GetAll();
        T GetById(TId id); 
        T Add(T entity);
        T Update(T entity);
        T Delete(TId id);
    }
}
