FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
COPY ./payment.service.api/payment.service.api.csproj api/
RUN dotnet restore "./payment.service.clrtech.sln"
COPY ./payment.service.api/ api/
WORKDIR /src/api    
RUN dotnet build "payment.service.api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "payment.service.api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
RUN addgroup --system --gid 1001 dotnet
RUN adduser --system --uid 1001 csharp
COPY --from=publish  /app/publish .
RUN chown -R csharp:dotnet /app && chmod -R 750 /app
USER csharp
EXPOSE 8080
ENTRYPOINT ["dotnet", "payment.service.api.dll"]