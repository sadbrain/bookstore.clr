using auth.service.app.Authentication.Common;
using MediatR;

namespace auth.service.app.Authentication.Commands.Register;

public record RegisterCommand
(
    string FirstName,
    string LastName,
    string Email,
    string Password
) : IRequest<AuthenticationResult>;
