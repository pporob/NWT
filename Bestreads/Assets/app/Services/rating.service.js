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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var RatingService = (function () {
    function RatingService(http, route, router) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.bookId = this.route.snapshot.params['id'];
        this.fetchRating();
    }
    RatingService.prototype.fetchRating = function () {
        var _this = this;
        if (this.bookId == "")
            this.bookId = "no id";
        console.log("bookId = " + this.bookId);
        var request = this.http.request("../../../api/BooksApi/Rating/" + this.bookId);
        request.subscribe(function (response) {
            try {
                _this.rating = response.json();
            }
            catch (Error) {
                alert(Error.message);
            }
        }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    RatingService.prototype.syncRating = function (rating) {
        var _this = this;
        if (rating === void 0) { rating = this.rating.Rating; }
        console.log("rating = " + rating);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("../../../api/BooksApi/Rating/" + this.bookId, JSON.stringify({ "rating": rating }), { headers: headers }).subscribe(function (response) { _this.fetchRating(); }, function (error) { return alert("Error: " + JSON.stringify(error)); });
    };
    RatingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], RatingService);
    return RatingService;
}());
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map