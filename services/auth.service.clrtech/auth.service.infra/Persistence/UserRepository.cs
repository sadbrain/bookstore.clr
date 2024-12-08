
using auth.service.app.Common.Interfaces.Persistence;
using auth.service.domain.Entities;

namespace auth.service.infra.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    public List<User> _users { get; set; } 
    public UserRepository()
    {
        _users = new List<User>();
    }

    public void Add(User user)
    {
        _users.Add(user);
    }

    public User? GetUserByEmail(string email)
    {
        Console.WriteLine(email);
        Console.WriteLine(_users.Count);
        Console.WriteLine(_users.SingleOrDefault(u => u.Email == email));
        return _users.SingleOrDefault(u => u.Email == email);
    }
}
