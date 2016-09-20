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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var book_service_1 = require('./../Services/book.service');
var NewComponent = (function () {
    function NewComponent(bookService) {
        this.bookService = bookService;
    }
    NewComponent.prototype.onSubmit = function (title, author, description) {
        var book = this.bookService.book;
        book.Title = title.value;
        book.Description = description.value;
        book.Author = author.value;
        this.bookService.addBook(book);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'new-book',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, book_service_1.default],
            template: "\n               <h1>New Book</h1>\n              <br/><br /><br />\n<div  style=\"padding:0; \">\n    <div class=\"well container-fluid \" style=\"color: moccasin;background-image: url(https://images2.alphacoders.com/261/26102.jpg);  padding:0; \">\n        <div class=\"well container-fluid\" style=\"background-color:rgba(47,79,79,0.7); border: none; padding-left:4%; margin-bottom:0;\">\n            <br />\n     \n            <div class=\"col-md-4\">\n                \n\n                <span class=\"glyphicon glyphicon-user \" style=\"color:moccasin; cursor:default; padding-right:1%;\"> </span>\n                <input placeholder=\" Author\" style=\"color:darkslategray;  width:90%;\" #author/>\n                <br />\n                <br />\n\n                <span class=\"glyphicon glyphicon-book \" style=\"color:moccasin;  cursor:default;  padding-right:1%;\"> </span>\n                <input placeholder=\" Title\" style=\"color:darkslategray; width:90%;\" #title/>\n\n                <br />\n                <br />\n                <div class=\"col-md-6\">\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Adult</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Biography</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Children</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Classic</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Crime</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Fantasy</label>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Fiction</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Mystery</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Novels</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Romance</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Thriller</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"\">Young</label>\n                    </div>\n                </div>\n                <br/><br />\n</div>\n            <div class=\"col-md-8\">\n                <span class=\"glyphicon glyphicon-pencil \" style=\"color:moccasin; cursor:default;  padding-right:1%; vertical-align:top;\"> </span>\n                <textarea class=\"form-inline\" rows=\"8\" id=\"comment\" style=\"color:darkslategray; width:95%;\" #description></textarea>\n                <br /><br />\n                <a routerLink=\"/\">\n                    <span class=\"glyphicon glyphicon-remove pull-right\" style=\"border:solid; border-color:moccasin; color:moccasin;  font-size:200%; cursor: pointer; margin-right:2%; padding:1%;\"> </span>\n                 </a>\n                <a routerLink=\"/\"> \n                <input type=\"submit\" value = \"Submit\" (click)=\"onSubmit(title,author,description)\" class=\"glyphicon glyphicon-ok pull-right\"  style=\"border:solid; border-color:moccasin; color:moccasin; font-size:200%; cursor: pointer; margin-right:4%; padding:1%; \"/>\n                </a>\n            </div>\n            </div>\n    </div>\n</div>\n    "
        }), 
        __metadata('design:paramtypes', [book_service_1.default])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=new.component.js.map