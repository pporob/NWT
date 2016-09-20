"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BookItem_1 = require("./../Models/BookItem");
var Action_1 = require('./Action');
var BookService = (function () {
    function BookService() {
        this.ID_COUNTER = 0;
        this.books = [new BookItem_1.default("Book1", "Author 1", null, this.ID_COUNTER++), new BookItem_1.default("Book2", "Author 2", null, this.ID_COUNTER++),];
        this.fetchBooks();
    }
    BookService.prototype.processAction = function (action) {
        if (action instanceof Action_1.RemoveAction) {
            this.remove(action.bookItem);
        }
        else if (action instanceof Action_1.ChangeValueAction) {
            this.changeValue(action.bookItem, action.newValue, action.changed);
        }
        else if (action instanceof Action_1.AddAction) {
            this.addBook(action.title, action.author, action.imgSrc, action.description, action.rating);
        }
        else {
            throw new Error("Unhandled action");
        }
    };
    BookService.prototype.fetchBooks = function () {
        //!!!!!!!!!!!!!
        //UPOZORENJE: jQuery nije uključen u projekt. Najbolje ga je instalirati sa: npm install --save jquery
        //I onda ga uključiti u _Layout.cshtml-u!
        /*$.ajax({
          url: "/api/BookItems"
        }).done(todos => {
           this.todos = todos.map(todo => new BookItem(todo.Value, todo.Done, todo.ID));
        });*/
    };
    BookService.prototype.addBook = function (Title, Author, ImgScr, Description, Rating) {
        var id = this.ID_COUNTER++;
        var bookItem = new BookItem_1.default(Title, Author, ImgScr, id, Description, Rating);
        this.books.push(bookItem);
        /*$.ajax({
            url: "/api/TodoItems",
            method: "POST",
            data: { Value: value}
         }).done(value => { todoItem.ID = value.ID})
           .fail(error => console.log("Error", error));*/
    };
    BookService.prototype.remove = function (bookItem) {
        var index = this.books.indexOf(bookItem);
        if (index != -1) {
            this.books.splice(index, 1);
        }
        /*$.ajax({
            url: "/api/TodoItems/" + todoItem.ID,
            method: "DELETE"
        }).fail(error => console.log("Error", error)); */
    };
    BookService.prototype.changeValue = function (bookItem, value, changed) {
        switch (changed) {
            case "title":
            case "Title":
                bookItem.Title = value;
                break;
            case "Author":
            case "author":
                bookItem.Author = value;
                break;
            case "description":
            case "Description":
                bookItem.Description = value;
                break;
            default:
                throw new SyntaxError("Wrong name for field.");
        }
        this.syncBookItem(bookItem);
    };
    /*
        private toggleItems(done: boolean) {
            this.books.forEach((todo) => todo.done = done);
            this.syncToggleChecked(done);
        }*/
    BookService.prototype.syncBookItem = function (bookItem) {
        /*$.ajax({
              url: "/api/BookItems/" + todoItem.ID,
              method: "PUT",
              data: {
                  ID: todoItem.ID,
                  Value: todoItem.value,
                  Done: todoItem.done
              }
          }).fail(error => console.log("Error", error)); */
    };
    BookService.prototype.syncToggleChecked = function (done) {
        /*$.ajax({
              url: "/api/TodoItems/ToggleChecked/" + done,
              method: "PUT"
        }).fail(error => console.log("Error", error));*/
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookService);
    return BookService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookService;
//# sourceMappingURL=BookService.js.map