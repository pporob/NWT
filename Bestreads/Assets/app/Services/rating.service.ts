import {RatingItem} from "./../Models/RatingItem"
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Injectable} from '@angular/core'

@Injectable()
export class RatingService {
    private http: Http;
    private bookId: string;
    public rating: RatingItem;

    constructor(http: Http, private route: ActivatedRoute, private router: Router) {
        this.http = http;
        this.bookId = this.route.snapshot.params['id'];
        this.fetchRating();
    }

    private fetchRating() {
        if (this.bookId == "") this.bookId = "no id";
        console.log("bookId = " + this.bookId);
        let request = this.http.request("../../../api/BooksApi/Rating/" + this.bookId)

        request.subscribe((response: Response) => {
            try {
                this.rating = response.json();
            } catch (Error) {
                alert(Error.message);
            }
        }, (error) => alert("Error: " + JSON.stringify(error)));
    }

    public syncRating(rating: number = this.rating.Rating) {
        console.log("rating = " + rating);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("../../../api/BooksApi/Rating/" + this.bookId, JSON.stringify({ "rating": rating }), { headers: headers }).subscribe(
            (response: Response) => { this.fetchRating() },
            (error) => alert("Error: " + JSON.stringify(error))
        );
    }
}