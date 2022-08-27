using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OneDx.Models;

namespace OneDx.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersController(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }

        [HttpGet]
        [Route("all")]
        public List<ApplicationUser> GetAllUsers()
        {
            return _userManager.Users.ToList();
        }

        //[HttpPost]
        //[Route("elevate")]
        //public async Task elevate(ApplicationUser userToElevate)
        //{
        //    bool isRoleCreated = await _roleManager.RoleExistsAsync("Admin");
        //    if (!isRoleCreated)
        //    {
        //        var role = new IdentityRole();
        //        role.Name = "Admin";
        //        await _roleManager.CreateAsync(role);
        //    }

        //    ApplicationUser user = await _userManager.FindByIdAsync(userToElevate.Id);
        //    await _userManager.AddToRoleAsync(user, "Admin");
        //}

        [HttpGet]
        [Route("newRoles")]
        public async Task CreateRoles()
        {
            bool isRoleCreated = await _roleManager.RoleExistsAsync("Admin");
            if (!isRoleCreated)
            {
                var role = new IdentityRole();
                role.Name = "Admin";
                await _roleManager.CreateAsync(role);
            }

            ApplicationUser user = await _userManager.FindByEmailAsync("markadams@gmail.com");
            await _userManager.AddToRoleAsync(user, "Admin");
        }
    }
}
