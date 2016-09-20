using Bestreads.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Drawing;
using System.Linq;
using System.Web;

namespace Bestreads.DAL
{
    public class BestreadsInitializer : DropCreateDatabaseAlways<BestreadsDbContext>
    {
        protected override void Seed(BestreadsDbContext context)
        {
            var UserManager = new UserManager<User>(new UserStore<User>(context));

            string name = "User1";
            string password = "123456";

            //Create User=User1 with password=123456
            var user = new User();
            user.UserName = name;
            var userresult = UserManager.Create(user, password);


            var tags = new List<Tag>()
            {
                new Tag() { Name = "Fiction"},   //0
                new Tag() { Name = "Classic"},
                new Tag() { Name = "Fantasy"},
                new Tag() { Name = "Mystery"},
                new Tag() { Name = "Crime"},
                new Tag() { Name = "Biography"}, //5
                new Tag() { Name = "Romance"},
                new Tag() { Name = "Thriller"},
                new Tag() { Name = "Novels"},
                new Tag() { Name = "Adult"},
                new Tag() { Name = "Young"},   //10  
                new Tag() { Name = "Children"},
            };

            string imagesDir = AppDomain.CurrentDomain.BaseDirectory + @"\Images";
            var books = new List<Book>()
            {
                new Book() { Title= "Oliver Twist", Author= "Charles Dickens",
                             Description ="The story of the orphan Oliver, who runs away from the workhouse only to be taken in by a den of thieves, shocked readers when it was first published. Dickens's tale of childhood innocence beset by evil depicts the dark criminal underworld of a London peopled by vivid and memorable characters — the arch-villain Fagin, the artful Dodger, the menacing Bill Sikes and the prostitute Nancy. Combining elements of Gothic Romance, the Newgate Novel and popular melodrama, in Oliver Twist Dickens created an entirely new kind of fiction, scathing in its indictment of a cruel society, and pervaded by an unforgettable sense of threat and mystery.",
                             User = user,
                             Image = (Image.FromFile(imagesDir + @"\olivert.jpg")).toByteArray()},
                new Book() { Title= "The Adventures of Sherlock Holmes", Author= "Arthur Conan Doyle",
                             Description ="Comprising the series of short stories that made the fortunes of the Strand, the magazine in which they were first published, this volume won even more popularity for Sherlock Holmes and Dr. Watson. Holmes is at the height of his powers in many of his most famous cases, including The Red-Headed League, The Speckled Band, and The Blue Carbuncle. ",
                            User = user,
                            Image = (Image.FromFile(imagesDir + @"\sherlock.jpg")).toByteArray()
                            },
                new Book() { Title= "Murder on the Orient Express", Author= "Agatha Christie",
                            Description ="Just after midnight, a snowdrift stopped the Orient Express in its tracks. The luxurious train was surprisingly full for the time of the year. But by the morning there was one passenger fewer. A passenger lay dead in his compartment, stabbed a dozen times, his door locked from the inside.",
                            User = user,
                            Image = (Image.FromFile(imagesDir + @"\hpoirot.jpg")).toByteArray()
                            },
                new Book() { Title= "Treasure Island", Author= "Robert Louis Stevenson",
                            Description ="The most popular pirate story ever written in English, featuring one of literature’s most beloved “bad guys,” Treasure Island has been happily devoured by several generations of boys—and girls—and grownups. Its unforgettable characters include: young Jim Hawkins, who finds himself owner of a map to Treasure Island, where the fabled pirate booty is buried; honest Captain Smollett, heroic Dr. Livesey, and the good-hearted but obtuse Squire Trelawney, who help Jim on his quest for the treasure; the frightening Blind Pew, double-dealing Israel Hands, and seemingly mad Ben Gunn, buccaneers of varying shades of menace; and, of course, garrulous, affable, ambiguous Long John Silver, who is one moment a friendly, laughing, one-legged sea-cook . . .and the next a dangerous pirate leader!",
                            User = user,
                            Image = (Image.FromFile(imagesDir + @"\tisland.jpg")).toByteArray()
                            },
                new Book() { Title= "The Adventures of Tom Sawyer", Author= "Mark Twain",
                            Description ="The Adventures of Tom Sawyer is the first of Mark Twain's novels to feature one of the best-loved characters in American fiction, with a critical introduction by John Seelye in Penguin Classics. From the famous episodes of the whitewashed fence and the ordeal in the cave to the trial of Injun Joe, The Adventures of Tom Sawyer is redolent of life in the Mississippi River towns in which Twain spent his own youth. A sombre undercurrent flows through the high humour and unabashed nostalgia of the novel, however, for beneath the innocence of childhood lie the inequities of adult reality—base emotions and superstitions, murder and revenge, starvation and slavery.",
                            User = user,
                            Image = (Image.FromFile(imagesDir + @"\tsawyer.jpg")).toByteArray()
                            },
                new Book() { Title= "The Call of the Wild ", Author= "Jack London",
                            Description ="Buck, a sturdy crossbreed canine (half St. Bernard, half Shepherd), is a dog born to luxury and raised in a sheltered Californian home. But then he is kidnapped and sold to be a sled dog in the harsh and frozen Yukon Territory. Passed from master to master, Buck embarks on an extraordinary journey, proving his unbreakable spirit....",
                            User = user,
                            Image = (Image.FromFile(imagesDir + @"\call.jpg")).toByteArray()
                            },
            };

            var lists = new List<List>()
            {
                new List() { ListName= "Read", User = user, },
                new List() { ListName = "To read", User = user},
                new List() { ListName = "Not interested", User = user},
            };

            var userBooks = new List<UserBook>()
            {
                new UserBook() {  User = user, Book = books[0], Rating = 3 },
                new UserBook() {  User = user, Book = books[1], Rating = 2 },
                new UserBook() {  User = user, Book = books[2], Rating = 5 },
                new UserBook() {  User = user, Book = books[3], Rating = 2 },
                new UserBook() {  User = user, Book = books[4], Rating = 3 },
                new UserBook() {  User = user, Book = books[5], Rating = 4 },
            };

            books[0].BooksTag = new List<Tag> { tags[1], tags[11] };
            books[1].BooksTag = new List<Tag> { tags[1], tags[3], tags[4] };
            books[2].BooksTag = new List<Tag> { tags[1], tags[3], tags[4] };
            books[3].BooksTag = new List<Tag> { tags[0], tags[1], tags[10], tags[11] };
            books[4].BooksTag = new List<Tag> { tags[0], tags[1], tags[10], tags[11] };
            books[5].BooksTag = new List<Tag> { tags[0], tags[1], tags[8], tags[9], tags[10] };

            tags[0].TagsBooks = new List<Book> { books[3], books[4], books[5] };
            tags[1].TagsBooks = new List<Book> { books[0], books[1], books[2], books[3], books[4], books[5] };
            tags[3].TagsBooks = new List<Book> { books[1], books[2] };
            tags[4].TagsBooks = new List<Book> { books[1], books[2] };
            tags[8].TagsBooks = new List<Book> { books[5] };
            tags[9].TagsBooks = new List<Book> { books[5] };
            tags[10].TagsBooks = new List<Book> { books[3], books[4], books[5] };
            tags[11].TagsBooks = new List<Book> { books[0], books[1], books[2] };


            tags.ForEach(tag => context.Tags.Add(tag));
            books.ForEach(book => context.Books.Add(book));
            userBooks.ForEach(userBook => context.UserBooks.Add(userBook));

            base.Seed(context);

        }
    }
}