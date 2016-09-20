import {Component, Input, Output, EventEmitter } from "@angular/core";
import {NgFor, NgIf, NgClass} from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Http, HTTP_PROVIDERS, HttpModule} from "@angular/http";
import {RatingService} from "./../Services/rating.service";

@Component({
    selector: "book-rating",
    directives: [NgFor, NgIf, NgClass],
    providers: [RatingService],
    template:
    `  
                
                <br />
                <h4> Avg. Rating:  {{ ratingService.rating == null ? "N/A" : ratingService.rating.AvgRating}}</h4>
                <h4>
                    Rate it:
                    <a [class]="starClass(1)" (click)="setRating(1)"></a>
                    <a [class]="starClass(2)" (click)="setRating(2)"></a>
                    <a [class]="starClass(3)" (click)="setRating(3)"></a>
                    <a [class]="starClass(4)" (click)="setRating(4)"></a>
                    <a [class]="starClass(5)" (click)="setRating(5)"></a>
                </h4> 
    `
})

    /*
     <div [hidden] = "userMovieService.userMovie == null">
                </div>
    */

export class RatingComponent {
   

    constructor(private ratingService: RatingService) {
    }

    private setRating(rating: number) {
        this.ratingService.syncRating(rating);
    }

    private starClass(starIndex: number): string {
        if (this.ratingService.rating == null || this.ratingService.rating.Rating == null)
            return "glyphicon glyphicon-star-empty";
        if (starIndex <= this.ratingService.rating.Rating) {
            return "glyphicon glyphicon-star";
        }
        return "glyphicon glyphicon-star-empty";
    }

}