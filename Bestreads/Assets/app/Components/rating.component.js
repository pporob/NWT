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
var rating_service_1 = require("./../Services/rating.service");
var RatingComponent = (function () {
    function RatingComponent(ratingService) {
        this.ratingService = ratingService;
    }
    RatingComponent.prototype.setRating = function (rating) {
        this.ratingService.syncRating(rating);
    };
    RatingComponent.prototype.starClass = function (starIndex) {
        if (this.ratingService.rating == null || this.ratingService.rating.Rating == null)
            return "glyphicon glyphicon-star-empty";
        if (starIndex <= this.ratingService.rating.Rating) {
            return "glyphicon glyphicon-star";
        }
        return "glyphicon glyphicon-star-empty";
    };
    RatingComponent = __decorate([
        core_1.Component({
            selector: "book-rating",
            directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass],
            providers: [rating_service_1.RatingService],
            template: "  \n                \n                <br />\n                <h4> Avg. Rating:  {{ ratingService.rating == null ? \"N/A\" : ratingService.rating.AvgRating}}</h4>\n                <h4>\n                    Rate it:\n                    <a [class]=\"starClass(1)\" (click)=\"setRating(1)\"></a>\n                    <a [class]=\"starClass(2)\" (click)=\"setRating(2)\"></a>\n                    <a [class]=\"starClass(3)\" (click)=\"setRating(3)\"></a>\n                    <a [class]=\"starClass(4)\" (click)=\"setRating(4)\"></a>\n                    <a [class]=\"starClass(5)\" (click)=\"setRating(5)\"></a>\n                </h4> \n    "
        }), 
        __metadata('design:paramtypes', [rating_service_1.RatingService])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map