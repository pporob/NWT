using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Bestreads.Models
{
    public class List
    {
        [Key]
        public int ListID { get; set; }
        public string ListName { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<ListsBooks> BooksList { get; set; }



    }

    public class ListsBooks
    {
        [Key]
        public int ListsID { get; set; }

        public virtual List List { get; set; }
        public virtual Book Book { get; set; }
    }
}