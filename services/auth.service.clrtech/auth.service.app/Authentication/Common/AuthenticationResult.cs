namespace auth.service.app.Authentication.Common;

public record AuthenticationResult(
    string FirstName,
    string LastName,
    string Email,
    string Password,
    string Token
 );

