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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var BookItem_1 = require("./../Models/BookItem");
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.book = new BookItem_1.BookItem("", "", null, -1, "", [], 0);
    }
    /* public processAction(action: Action) {
         if (action instanceof RemoveAction) { this.remove(action.bookItem); }
         else if (action instanceof ChangeValueAction) { this.changeValue(action.bookItem, action.newValue, action.changed); }
         else {
             throw new Error("Unhandled action");
         }
     }*/
    BookService.prototype.fetchBook = function (id) {
        var _this = this;
        var request = this.http.request("../../api/BooksApi/GetId/" + id);
        request.subscribe(function (response) {
            var tmp = response.json();
            _this.book = new BookItem_1.BookItem(tmp.Title, tmp.Author, tmp.ImgSrc, tmp.BookID, tmp.Description, tmp.Tags);
            //console.log("******this.book.Tags.length:" + this.book.Tags.length);
        }, function (error) { return alert("!!!!!Error let's see: " + JSON.stringify(error)); });
    };
    BookService.prototype.addBook = function (book) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("../../api/BooksApi/Create", JSON.stringify(book), { headers: headers }).subscribe(function (response) { console.log(response.status + " " + response.statusText); }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    BookService.prototype.changeValue = function (bookItem, newValue, changed) {
        switch (changed) {
            case "title":
            case "Title":
                bookItem.Title = newValue;
                break;
            case "Author":
            case "author":
                bookItem.Author = newValue;
                break;
            case "description":
            case "Description":
                bookItem.Description = newValue;
                break;
            default:
                throw new SyntaxError("Wrong name of changed field.");
        }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("../../api/BooksApi/Edit/" + bookItem.BookID, JSON.stringify(bookItem), { headers: headers }).subscribe(function (response) { console.log(response.status + " " + response.statusText); }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookService;
//# sourceMappingURL=book.service.js.map