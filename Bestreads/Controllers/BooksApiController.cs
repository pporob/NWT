using Bestreads.DAL;
using Bestreads.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Bestreads.Controllers
{
    public class BooksApiController : ApiController
    {
        private BestreadsDbContext db = new BestreadsDbContext();

        #region Controller
        // GET: api/BooksApi/ 
        public IQueryable<BookApi> GetAll()
        {
            return db.Books
              .Select(book => new BookApi
              {
                  Title = book.Title,
                  Author = book.Author,
                  Image = book.Image,
                  BookID = book.BookID,
                  Description = book.Description,
                  Tags = book.BooksTag.Select(tag => tag.Name)
                 
              });
        }

        // GET: api/BooksApi/GetId/1
        public BookApi GetId(int? id)
        {


            if (id == null)
            {
                return null;
            }

            Book book = db.Books.Find(id);

            if (book == null)
            {
                return null;
            }

            return new BookApi
            {
                Title = book.Title,
                Author = book.Author,
                Image = book.Image,
                BookID = book.BookID,
                Description = book.Description,
                Tags = book.BooksTag.Select(tag => tag.Name),
               
            };
        }

        [System.Web.Http.HttpPost]
        // POST: api/BookApi/Edit/2
        public HttpStatusCodeResult Edit(int? id, [Bind(Include = "Title,Author,Description")] BookApi bookApi)
        {
            if (id == null || bookApi == null || User.Identity.GetUserId() == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Book book = db.Books.Find(id);

            if (book == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            /*
             if (book.User.Id != id.ToString())
             {
                 return new HttpStatusCodeResult(HttpStatusCode.Unauthorized);
             }
             */

            if (ModelState.IsValid)
            {

                book.Title = bookApi.Title;
                book.Author = bookApi.Author;
                book.Description = bookApi.Description;

                db.Entry(book).State = EntityState.Modified;
                db.SaveChanges();
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }

            return new HttpStatusCodeResult(HttpStatusCode.Conflict);
        }

        [System.Web.Http.HttpPost]
        // POST: api/BookApi/Create
        public HttpStatusCodeResult Create([Bind(Include = "Title,Author,Description")] BookApi bookApi)
        {
            if (bookApi == null || User.Identity.GetUserId() == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            if (ModelState.IsValid)
            {
                Book book = new Book();
                User user = db.Users.Find(User.Identity.GetUserId());
               
                book.Title = bookApi.Title;
                book.Author = bookApi.Author;
                book.Description = bookApi.Description;

               // book.User = user;

                db.Books.Add(book);
                db.SaveChanges();
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }

            return new HttpStatusCodeResult(HttpStatusCode.Conflict);
        }

        [System.Web.Http.HttpPost]
        [ValidateAntiForgeryToken]
        public HttpStatusCodeResult Delete(int id)
        {
            if (id <= 0  || User.Identity.GetUserId() == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Book book = db.Books.Find(id);
            if (book == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }
            /*
            if (book.User.Id != id.ToString())
            {
                return new HttpStatusCodeResult(HttpStatusCode.Unauthorized);
            }
            */
            else {
                db.Books.Remove(book);
                db.SaveChanges();
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }
           
        }

        [System.Web.Http.HttpGet]
        // GET: api/BooksApi/Rating/2
        public RatingApi Rating(int? id)
        {
            if (id == null)
            {
                return null;
            }
            Book book = db.Books.Find(id);
            var userId = User.Identity.GetUserId();
            ApplicationUser currentUser = db.Users.Find(userId);
            if (currentUser == null || currentUser.UserBooks == null)
            {
                return null;
                
            }
            if (book == null)
            {
                return null;
            }
            var currentUserMovie = currentUser.UserBooks
                .Where((userMovie) => (userMovie.Book == book))
                .DefaultIfEmpty(null).First();
            if (currentUserMovie == null)
            {
                return new RatingApi()
                {
                    Rating = 0,
                    AvgRating = book.Rating
                };
            }
            return new RatingApi()
            {
                Rating = currentUserMovie.Rating,
                AvgRating = book.Rating
            };
        }

        [System.Web.Http.HttpPost]
        // POST: api/BooksApi/Rating/2
        public HttpStatusCodeResult Rating(int? id, [Bind(Include = "Rating")] RatingApi ratingApi)
        {
            if (id == null || ratingApi == null || User.Identity.GetUserId() == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Book book = db.Books.Find(id);
            var userId = User.Identity.GetUserId();
            ApplicationUser currentUser = db.Users.Find(userId);

            if (currentUser == null || currentUser.UserBooks == null || book == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }

            var currentUserBook = db.UserBooks.Find(userId, id);
            if (currentUserBook != null)
            {
                currentUserBook.Rating = ratingApi.Rating;

                db.SaveChanges();
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }

            var newUserBook = new UserBook() { User = (User)currentUser, Book = book, Rating = ratingApi.Rating };
            db.UserBooks.Add(newUserBook);

            db.SaveChanges();
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
        #endregion

        #region Models
        public class BookApi
    {
        public int BookID { get; set; }
        public byte[] Image { get; set; }
        public string ImgSrc
        {
            get
            {
                if (Image == null)
                {
                    return String.Format("data:image/jpeg;base64,{0}", Convert.ToBase64String(ImageHelper.dummyImage));
                }
                else
                {
                    return String.Format("data:image/jpeg;base64,{0}", Convert.ToBase64String(Image));
                }
            }
        }
        public string Title { get; set; }
        public string Author { get; set; }
        //public double Rating { get; set; }
        public string Description { get; set; }
        public IEnumerable<string> Tags { get; set; }
    }

    public class RatingApi
    {
        public int Rating { get; set; }
        public double AvgRating { get; set; }
    }
    #endregion
}
