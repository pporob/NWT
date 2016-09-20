"use strict";
var BookItem = (function () {
    function BookItem(Title, Author, ImgSrc, BookID, Description, Tags, Rating) {
        this.BookID = BookID ? BookID : -1;
        this.Title = Title;
        this.Description = Description;
        this.Author = Author;
        this.ImgSrc = ImgSrc;
        this.Tags = Tags;
        this.Rating = Rating;
    }
    return BookItem;
}());
exports.BookItem = BookItem;
//# sourceMappingURL=BookItem.js.map