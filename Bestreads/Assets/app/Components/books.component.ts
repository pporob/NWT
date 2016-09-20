import {Component, Input, coreBootstrap} from "@angular/core";
import {NgFor} from "@angular/common";
import {BookItem} from "./../Models/BookItem"
import BooksService from "./../Services/books.service"

@Component({
    selector: "book-list",
    directives: [NgFor],
    providers: [BooksService],
    template: ` 
        <br/>
<div  style="border: none; padding: 0; ">
   
    <input type="text" class="form-control" placeholder="Search" [value]="searchKey" (keyup)="updateSearchKey($event.target)">
<br/>
    
    <a routerLink="New" routerLinkActive="active">
        <span class="glyphicon glyphicon-plus pull-right" style="color:darkslategray; font-size:300%; cursor: pointer;"></span>
    </a>


<br/>

    <br/>
    <br />

    <table class="table">
        <tr style="background-color:rgba(47,79,79,1); color: moccasin; border:solid; border-color:darkslategray;">
            <th class="col-md-2  " >
                Image
            </th>
            <th class="col-md-5  ">
                Title
            </th>
            <th class="col-md-5  ">
                Author
            </th>
             <th class="col-md-1  ">
                
            </th>
        </tr>

                <tr style="background-color: moccasin; color:darkslategray;  border:solid; border-color:darkslategray; font-size:130%;" *ngFor="let book of (service.bookItems | contains:searchKey)">
             <td >
                 <img src="{{book.ImgSrc}}" width="90" height="114" />
            </td>
            <td >
               
                <a [routerLink]="[ 'Detail',  book.BookID]" routerLinkActive="active">
                    {{book.Title}}
                </a>
            </td>
            <td >
                {{book.Author}}
            </td>
            <td >
                <span class="glyphicon glyphicon-remove"  style="cursor: pointer; " (click)="onRemoveBook(book.BookID)"></span>
            </td >
        </tr>
    </table>
</div>
      `
})


export class BookList {
    @Input()
    public books: BookItem[];
    public service: BooksService;
    private searchKey: string = "";
 
    constructor(booksService: BooksService) {
        this.service = booksService;
    }

    private updateSearchKey(input: HTMLInputElement): void {
        this.searchKey = input.value;
    }

    private onRemoveBook(id: number) {
        console.log("ID of selected book: " + id);
        this.service.removeBookItem(id);
    }
    

}