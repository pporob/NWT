using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Bestreads.Models
{
    public class User : ApplicationUser
    {
        // public string Name { get; set; }
        public string Location { get; set; }

        public virtual ICollection<List> Lists { get; set; }
        public virtual ICollection<Book> Books { get; set; }

        internal Task<ClaimsIdentity> GenerateUserIdentityAsync(ApplicationUserManager userManager)
        {
            throw new NotImplementedException();
        }
    }
   
}