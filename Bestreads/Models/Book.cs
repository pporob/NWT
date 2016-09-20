using Bestreads.DAL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Bestreads.Models
{
    public class Book
    {
        [Key]
        public int BookID { get; set; }
        public byte[] Image { get; set; }
        public string ImgSrc
        {
            get
            {
                if (Image == null)
                {
                    return string.Format("data:image/jpeg;base64,{0}", Convert.ToBase64String(ImageHelper.dummyImage));
                }
                else
                {
                    return string.Format("data:image/jpeg;base64,{0}", Convert.ToBase64String(Image));
                }

            }
        }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<ListsBooks> BooksList { get; set; }
        public virtual ICollection<Tag> BooksTag { get; set; }
        public virtual ICollection<UserBook> UserBooks { get; set; }

        public double Rating
        {
            get
            {
                int sum = 0, i = 0;
                if (UserBooks == null) return 0.0;
                foreach (UserBook userBook in UserBooks)
                {
                    sum += userBook.Rating;
                    i++;
                }
                if (i == 0) return 0.0;
                return Math.Round((double)sum / i, 2);
            }
        }
    }

    public class UserBook
    {
        [Required]
        [Range(0, 5)]
        public int Rating { get; set; }

        [Key, ForeignKey("User"), Column(Order = 0)]
        public string UserID { get; set; }  

        [Key, ForeignKey("Book"), Column(Order = 1)]
        public int BookID { get; set; }

        public virtual User User { get; set; }
        public virtual Book Book { get; set; }
    }
}