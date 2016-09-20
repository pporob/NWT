using Bestreads.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Bestreads.DAL
{
    public class BestreadsDbContext : IdentityDbContext<User>
    {
        public BestreadsDbContext() : base("DefaultConnection") 
        {
        }

        //public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<List> Lists { get; set; }
        public DbSet<ListsBooks> ListsBooks { get; set; }

        public DbSet<UserBook> UserBooks { get; set; }


    }
}