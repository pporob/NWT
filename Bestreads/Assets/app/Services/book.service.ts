import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core'

import {BookItem} from "./../Models/BookItem"

import Action, { RemoveAction, ChangeValueAction,  AddAction} from './Action';

@Injectable()
export default class BookService {
    public book = new BookItem ("", "", null, -1, "", [], 0);

    constructor(private http: Http) {       
    }

   /* public processAction(action: Action) {
        if (action instanceof RemoveAction) { this.remove(action.bookItem); }
        else if (action instanceof ChangeValueAction) { this.changeValue(action.bookItem, action.newValue, action.changed); }
        else {
            throw new Error("Unhandled action");
        }
    }*/

    public fetchBook(id: number)  {
       
        let request = this.http.request("../../api/BooksApi/GetId/" + id);
        
        request.subscribe((response: Response) => {
            var tmp = response.json();
            this.book = new BookItem(tmp.Title, tmp.Author, tmp.ImgSrc, tmp.BookID, tmp.Description, tmp.Tags);
            //console.log("******this.book.Tags.length:" + this.book.Tags.length);
           
        }, (error) => alert("!!!!!Error let's see: " + JSON.stringify(error)));
    }

    public addBook(book: BookItem) {
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("../../api/BooksApi/Create", JSON.stringify(book), { headers: headers }).subscribe(
            (response: Response) => { console.log(response.status + " " + response.statusText); },
            (error) => alert("Error: " + JSON.stringify(error))
        );
    }

    public changeValue(bookItem: BookItem, newValue: string, changed: string) {
        switch (changed) {
            case "title": case "Title":
                bookItem.Title = newValue;
                break;
            case "Author": case "author":
                bookItem.Author = newValue;
                break;
            case "description": case "Description":
                bookItem.Description = newValue;
                break;
            default:
                throw new SyntaxError("Wrong name of changed field.");
        }
       
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("../../api/BooksApi/Edit/" + bookItem.BookID, JSON.stringify(bookItem), { headers: headers }).subscribe(
            (response: Response) => { console.log(response.status + " " + response.statusText); },
            (error) => alert("Error: " + JSON.stringify(error))
        );

    }

    
}