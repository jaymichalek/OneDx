using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OneDx.Data;
using OneDx.Models;
using OneDx.Repositories;
using Duende.IdentityServer.Models;
using IdentityModel;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// Add services for OneDx Database Connection and Repository ---------------------------------------
builder.Services.AddDbContext<OneDxContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddScoped<IOneDxRepository, OneDxRepository>();
//--------------------------------------------------------------------------------------------------

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddIdentityServer()
    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>(options =>
    {
        options.IdentityResources.Add(new IdentityResource("roles", "Roles", new[] { JwtClaimTypes.Role, JwtClaimTypes.Role }));
        foreach (var c in options.Clients)
        {
            c.AllowedScopes.Add("roles");
        }
        foreach (var a in options.ApiResources)
        {
            a.UserClaims.Add(JwtClaimTypes.Role);
        }
    });

//builder.Services.AddAuthorization(options =>
//{
//    options.AddPolicy("Admin", policy =>
//        policy.RequireClaim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", "Admin"));

//    options.AddPolicy("User", policy =>
//        policy.RequireClaim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", new[] { "Admin", "Doctor" }));
//});

builder.Services.AddAuthentication()
    .AddIdentityServerJwt();

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapRazorPages();

app.MapFallbackToFile("index.html"); ;

app.Run();
