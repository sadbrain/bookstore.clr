using auth.service.domain.Entities;

namespace auth.service.app.Common.Interfaces.Persistence;

public interface IUserRepository
{
    void Add(User user);
    User? GetUserByEmail(string email);
}
