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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var books_service_1 = require("./../Services/books.service");
var BookList = (function () {
    function BookList(booksService) {
        this.searchKey = "";
        this.service = booksService;
    }
    BookList.prototype.updateSearchKey = function (input) {
        this.searchKey = input.value;
    };
    BookList.prototype.onRemoveBook = function (id) {
        console.log("ID of selected book: " + id);
        this.service.removeBookItem(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BookList.prototype, "books", void 0);
    BookList = __decorate([
        core_1.Component({
            selector: "book-list",
            directives: [common_1.NgFor],
            providers: [books_service_1.default],
            template: " \n        <br/>\n<div  style=\"border: none; padding: 0; \">\n   \n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [value]=\"searchKey\" (keyup)=\"updateSearchKey($event.target)\">\n<br/>\n    \n    <a routerLink=\"New\" routerLinkActive=\"active\">\n        <span class=\"glyphicon glyphicon-plus pull-right\" style=\"color:darkslategray; font-size:300%; cursor: pointer;\"></span>\n    </a>\n\n\n<br/>\n\n    <br/>\n    <br />\n\n    <table class=\"table\">\n        <tr style=\"background-color:rgba(47,79,79,1); color: moccasin; border:solid; border-color:darkslategray;\">\n            <th class=\"col-md-2  \" >\n                Image\n            </th>\n            <th class=\"col-md-5  \">\n                Title\n            </th>\n            <th class=\"col-md-5  \">\n                Author\n            </th>\n             <th class=\"col-md-1  \">\n                \n            </th>\n        </tr>\n\n                <tr style=\"background-color: moccasin; color:darkslategray;  border:solid; border-color:darkslategray; font-size:130%;\" *ngFor=\"let book of (service.bookItems | contains:searchKey)\">\n             <td >\n                 <img src=\"{{book.ImgSrc}}\" width=\"90\" height=\"114\" />\n            </td>\n            <td >\n               \n                <a [routerLink]=\"[ 'Detail',  book.BookID]\" routerLinkActive=\"active\">\n                    {{book.Title}}\n                </a>\n            </td>\n            <td >\n                {{book.Author}}\n            </td>\n            <td >\n                <span class=\"glyphicon glyphicon-remove\"  style=\"cursor: pointer; \" (click)=\"onRemoveBook(book.BookID)\"></span>\n            </td >\n        </tr>\n    </table>\n</div>\n      "
        }), 
        __metadata('design:paramtypes', [books_service_1.default])
    ], BookList);
    return BookList;
}());
exports.BookList = BookList;
//# sourceMappingURL=books.component.js.map