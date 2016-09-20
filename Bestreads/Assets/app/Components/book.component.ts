import {Component, Input, Output, EventEmitter } from "@angular/core";
import {NgFor, NgIf} from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Http, HTTP_PROVIDERS, HttpModule} from "@angular/http";
import BookService from "./../Services/book.service";
import {BookItem} from "./../Models/BookItem";
import {RatingComponent} from './rating.component';
import {RemoveAction, ChangeValueAction, AddAction, BookItemAction} from './../Services/Action';

/**
 <input *ngIf="isEdit" type="text" [value]="todo.value" (keyup.enter)="leaveEditMode($event.target, true)" (keyup.esc)="leaveEditMode($event.target, false)" (blur)="leaveEditMode($event.target, false)" autofocus/>
        <span *ngIf="!isEdit" (dblclick)="enterEditMode()">
            {{todo.value}}
        </span>
 */


@Component({
    selector: "book-details",
    directives: [NgFor, NgIf, RatingComponent],
    providers: [BookService],
    template:
    `  <div  style="padding:0;">
         <a routerLink="/"><span class="glyphicon glyphicon-arrow-left" style="font-size: 200%; color: darkslategray;"></span></a>
    <div class="well container-fluid " style="color: moccasin;background-image: url(https://images2.alphacoders.com/261/26102.jpg);  padding:0; ">
        <div class="well container-fluid" style="background-color:rgba(47,79,79,0.7); border: none; margin-bottom:0;">
            <div class="col-md-4 ">
                <br />
                <img src="{{bookService.book.ImgSrc}}" class="img-responsive" width = "600" height = "900"/>

            </div>

            <div class="col-md-8 ">
                
               
                    <input *ngIf="isEdit" type="text" [value]="bookService.book.Title" (keyup.enter)="leaveEditMode($event.target, true, "title")" (keyup.esc)="leaveEditMode($event.target, false, "title")" (blur)="leaveEditMode($event.target, false, "title")" autofocus/>
                            <span *ngIf="!isEdit" (dblclick)="enterEditMode()">
                                            <h1 style="color: moccasin;">{{bookService.book.Title}} </h1>
                            </span>

               
                     <input *ngIf="isEdit" type="text" [value]="bookService.book.Author" (keyup.enter)="leaveEditMode($event.target, true, "Author")" (keyup.esc)="leaveEditMode($event.target, false)" (blur)="leaveEditMode($event.target, false)" autofocus/>
                            <span *ngIf="!isEdit" (dblclick)="enterEditMode()">
                                          <h2 style="color: moccasin;"> {{bookService.book.Author}}</h2>
                            </span>            
                  
                <div><span class="glyphicon glyphicon-tag"></span><div *ngFor= "let tag of bookService.book.Tags">{{tag}}</div>
                       
                
                <br />
               
                    <input *ngIf="isEdit" type="text" [value]="bookService.book.Description" (keyup.enter)="leaveEditMode($event.target, true, "Description")" (keyup.esc)="leaveEditMode($event.target, false)" (blur)="leaveEditMode($event.target, false)" autofocus/>
                            <span *ngIf="!isEdit" (dblclick)="enterEditMode()">
                                          <p> {{bookService.book.Description}}</p>
                            </span>
                
                <book-rating ></book-rating>
</div>
            </div>
        </div>
    </div>


    <blockquote style="border-left-color:darksalmon;">
        <p>Comment</p>
        <footer><cite title="Source Title" style="color: darkslategray;">The New York Times</cite></footer>
    </blockquote>

    <br />

    <blockquote style="border-left-color:darksalmon;">
        <p>Comment</p>
        <footer><cite title="Source Title" style="color: darkslategray;">The Washington Post</cite></footer>
    </blockquote>
   
</div>
    `
})

export class BookDetails {
    @Input()
    public book: BookItem;
    private id: number;
    private isEdit: boolean = false;

    constructor( private route: ActivatedRoute, private router: Router, private bookService: BookService){}

    ngOnInit() {
        this.id = +this.route.snapshot.params['id']; // (+) converts string 'id' to a number
        this.bookService.fetchBook(this.id);
    }

   

    private enterEditMode() {
        this.isEdit = true;
    }

    private leaveEditMode(inputElement: HTMLInputElement, save: boolean, changed: string) {
        if (!this.isEdit) { return; }

        this.isEdit = false;

        if (save) {
            this.bookService.changeValue(this.book, inputElement.value.trim(), changed);
        }
    }
   
}







