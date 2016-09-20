using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Bestreads.Models
{
    public class Tag
    {
        [Key]
        public int TagID { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Book> TagsBooks { get; set; }
    }

   /* public class BookTags
    {
        [Key]
        public int BookTagsID { get; set; }

        public virtual Book Book { get; set; }
        public virtual Tag Tag { get; set; }
    }*/
}
