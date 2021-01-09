using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
      private readonly ILogger<UserController> _logger;
      private DatabaseContext _dbContext;

        public UserController(ILogger<UserController> logger, DatabaseContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("User")]
        public IEnumerable<User> GetUser()
        {
          return _dbContext.User;
        }

        [HttpPost("AddUser")]
        public async Task<ActionResult<User>> AddUser([FromBody]User user)
        {
          Console.WriteLine(user);
          _dbContext.User.Add(user);
          await _dbContext.SaveChangesAsync();

          return CreatedAtAction(nameof(GetUser), new { id = user.ID }, user);
        }
    }
}
