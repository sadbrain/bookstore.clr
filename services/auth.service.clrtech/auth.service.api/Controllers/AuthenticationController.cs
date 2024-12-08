using auth.service.app.Authentication.Commands.Register;
using auth.service.app.Authentication.Common;
using auth.service.contracts.Authentication;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace auth.service.api.Controllers;

public class AuthenticationController : ControllerBase
{
    private readonly ISender _mediator;

    public AuthenticationController(IMediator mediator)
    {
        _mediator = mediator;
    }   

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest req)
    {
        var command = new RegisterCommand(  
            req.FirstName,
            req.LastName,
            req.Email,
            req.Password);
        AuthenticationResult authResult = await _mediator.Send(command);

        return Ok( new AuthenticationResponse(
            Guid.NewGuid(),
            authResult.FirstName,
            authResult.LastName,
            authResult.Email,
            authResult.Token));
    }
}
