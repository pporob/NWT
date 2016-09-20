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
var BookItem_1 = require("./../Models/BookItem");
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var BooksService = (function () {
    function BooksService(http) {
        this.ID_COUNTER = 0;
        /*
        this.bookItems = [new BookItem("Book11", "Author 11", null, this.ID_COUNTER++),
                      new BookItem("Book12", "Author 12", null, this.ID_COUNTER++)];
        */
        // /*
        this.bookItems = [];
        this.http = http;
        this.fetchBookItems();
        // */
    }
    BooksService.prototype.fetchBookItems = function () {
        var _this = this;
        var request = this.http.request("api/BooksApi/");
        request.subscribe(function (response) {
            _this.bookItems = response.json().map(function (book) { return new BookItem_1.BookItem(book.Title, book.Author, book.ImgSrc, book.BookID, book.Description, book.Tags); }); //, book.Rating))
        }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    BooksService.prototype.removeBookItem = function (id) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/BooksApi/Delete/" + id, { headers: headers }).subscribe(function (response) { _this.fetchBookItems(); }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    BooksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BooksService);
    return BooksService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BooksService;
//# sourceMappingURL=books.service.js.map