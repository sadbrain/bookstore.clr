using auth.service.app.Common.Interfaces.Persistence;
using auth.service.infra.Persistence.Repositories;
using Microsoft.Extensions.DependencyInjection;
namespace auth.service.infra;

public static class DependencyInjection
{
    public static IServiceCollection AddInfra(this IServiceCollection services)
    {
        services.AddSingleton<IUserRepository, UserRepository>();
        return services;
    }
}
