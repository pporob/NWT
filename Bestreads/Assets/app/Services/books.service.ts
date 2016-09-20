import {BookItem} from "./../Models/BookItem"
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core'


@Injectable()
export default class BooksService {
    public bookItems: BookItem[];
    private http: Http;
    private ID_COUNTER = 0;

    constructor(http: Http) {
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

    private fetchBookItems() {
        let request = this.http.request("api/BooksApi/")
        
        request.subscribe((response: Response) => {
            this.bookItems = response.json().map(book => new BookItem(book.Title, book.Author, book.ImgSrc, book.BookID, book.Description, book.Tags))//, book.Rating))
        }, (error) => alert("Error: " + JSON.stringify(error)));
    }

    public removeBookItem(id: number): void {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/BooksApi/Delete/" + id, { headers: headers }).subscribe(
            (response: Response) => { this.fetchBookItems() },
            (error) => alert("Error: " + JSON.stringify(error))
        );
    }
}