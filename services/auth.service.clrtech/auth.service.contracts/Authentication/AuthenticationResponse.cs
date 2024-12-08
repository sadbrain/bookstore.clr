﻿namespace auth.service.contracts.Authentication;

public record AuthenticationResponse
(
    Guid Id,
    string FirstName,
    string LastName,
    string Email,
    string Token
);