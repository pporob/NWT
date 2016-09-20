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
var router_1 = require('@angular/router');
var book_service_1 = require("./../Services/book.service");
var BookItem_1 = require("./../Models/BookItem");
var rating_component_1 = require('./rating.component');
/**
 <input *ngIf="isEdit" type="text" [value]="todo.value" (keyup.enter)="leaveEditMode($event.target, true)" (keyup.esc)="leaveEditMode($event.target, false)" (blur)="leaveEditMode($event.target, false)" autofocus/>
        <span *ngIf="!isEdit" (dblclick)="enterEditMode()">
            {{todo.value}}
        </span>
 */
var BookDetails = (function () {
    function BookDetails(route, router, bookService) {
        this.route = route;
        this.router = router;
        this.bookService = bookService;
        this.isEdit = false;
    }
    BookDetails.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id']; // (+) converts string 'id' to a number
        this.bookService.fetchBook(this.id);
    };
    BookDetails.prototype.enterEditMode = function () {
        this.isEdit = true;
    };
    BookDetails.prototype.leaveEditMode = function (inputElement, save, changed) {
        if (!this.isEdit) {
            return;
        }
        this.isEdit = false;
        if (save) {
            this.bookService.changeValue(this.book, inputElement.value.trim(), changed);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', BookItem_1.BookItem)
    ], BookDetails.prototype, "book", void 0);
    BookDetails = __decorate([
        core_1.Component({
            selector: "book-details",
            directives: [common_1.NgFor, common_1.NgIf, rating_component_1.RatingComponent],
            providers: [book_service_1.default],
            template: "  <div  style=\"padding:0;\">\n         <a routerLink=\"/\"><span class=\"glyphicon glyphicon-arrow-left\" style=\"font-size: 200%; color: darkslategray;\"></span></a>\n    <div class=\"well container-fluid \" style=\"color: moccasin;background-image: url(https://images2.alphacoders.com/261/26102.jpg);  padding:0; \">\n        <div class=\"well container-fluid\" style=\"background-color:rgba(47,79,79,0.7); border: none; margin-bottom:0;\">\n            <div class=\"col-md-4 \">\n                <br />\n                <img src=\"{{bookService.book.ImgSrc}}\" class=\"img-responsive\" width = \"600\" height = \"900\"/>\n\n            </div>\n\n            <div class=\"col-md-8 \">\n                \n               \n                    <input *ngIf=\"isEdit\" type=\"text\" [value]=\"bookService.book.Title\" (keyup.enter)=\"leaveEditMode($event.target, true, \"title\")\" (keyup.esc)=\"leaveEditMode($event.target, false, \"title\")\" (blur)=\"leaveEditMode($event.target, false, \"title\")\" autofocus/>\n                            <span *ngIf=\"!isEdit\" (dblclick)=\"enterEditMode()\">\n                                            <h1 style=\"color: moccasin;\">{{bookService.book.Title}} </h1>\n                            </span>\n\n               \n                     <input *ngIf=\"isEdit\" type=\"text\" [value]=\"bookService.book.Author\" (keyup.enter)=\"leaveEditMode($event.target, true, \"Author\")\" (keyup.esc)=\"leaveEditMode($event.target, false)\" (blur)=\"leaveEditMode($event.target, false)\" autofocus/>\n                            <span *ngIf=\"!isEdit\" (dblclick)=\"enterEditMode()\">\n                                          <h2 style=\"color: moccasin;\"> {{bookService.book.Author}}</h2>\n                            </span>            \n                  \n                <div><span class=\"glyphicon glyphicon-tag\"></span><div *ngFor= \"let tag of bookService.book.Tags\">{{tag}}</div>\n                       \n                \n                <br />\n               \n                    <input *ngIf=\"isEdit\" type=\"text\" [value]=\"bookService.book.Description\" (keyup.enter)=\"leaveEditMode($event.target, true, \"Description\")\" (keyup.esc)=\"leaveEditMode($event.target, false)\" (blur)=\"leaveEditMode($event.target, false)\" autofocus/>\n                            <span *ngIf=\"!isEdit\" (dblclick)=\"enterEditMode()\">\n                                          <p> {{bookService.book.Description}}</p>\n                            </span>\n                \n                <book-rating ></book-rating>\n</div>\n            </div>\n        </div>\n    </div>\n\n\n    <blockquote style=\"border-left-color:darksalmon;\">\n        <p>Comment</p>\n        <footer><cite title=\"Source Title\" style=\"color: darkslategray;\">The New York Times</cite></footer>\n    </blockquote>\n\n    <br />\n\n    <blockquote style=\"border-left-color:darksalmon;\">\n        <p>Comment</p>\n        <footer><cite title=\"Source Title\" style=\"color: darkslategray;\">The Washington Post</cite></footer>\n    </blockquote>\n   \n</div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, book_service_1.default])
    ], BookDetails);
    return BookDetails;
}());
exports.BookDetails = BookDetails;
//# sourceMappingURL=book.component.js.map