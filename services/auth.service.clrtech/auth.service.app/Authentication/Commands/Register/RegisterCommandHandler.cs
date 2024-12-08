using auth.service.app.Authentication.Common;
using auth.service.app.Common.Interfaces.Persistence;
using auth.service.domain.Entities;
using MediatR;

namespace auth.service.app.Authentication.Commands.Register;

public class RegisterCommandHandler :
    IRequestHandler<RegisterCommand, AuthenticationResult>
{
    private readonly IUserRepository _userRepository;
    public RegisterCommandHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    public async Task<AuthenticationResult> Handle(RegisterCommand command, CancellationToken cancellationToken)
    {
        //check if user already exists
        if (_userRepository.GetUserByEmail(command.Email) is not null)
        {
            throw new InvalidOperationException();
        }
        //create user
            var user = new User { 
                Email = command.Email, 
                FirstName = command.FirstName,  
                LastName = command.LastName,
                Password = command.Password,
                Id = Guid.NewGuid()
                };
        _userRepository.Add(user);

        //create jwt token

        return new AuthenticationResult(
               "1",
               "1",
               "1",
               "1",
               "1"
               );
    }
}
