FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app


# Copy csproj and restore as distinct layers
COPY ./API/API.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY ./API ./

# FROM build AS publish
RUN dotnet publish "API.csproj" -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app/out .

EXPOSE 30325
ENTRYPOINT [ "dotnet", "API.dll" ]

