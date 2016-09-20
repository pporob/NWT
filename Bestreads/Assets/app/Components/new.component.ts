import { Component } from '@angular/core'

import { Routes, ROUTER_DIRECTIVES, RouterModule } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import {BookItem} from "./../Models/BookItem"
import BookService from './../Services/book.service';

@Component({
    selector: 'new-book',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, BookService],
    template: `
               <h1>New Book</h1>
              <br/><br /><br />
<div  style="padding:0; ">
    <div class="well container-fluid " style="color: moccasin;background-image: url(https://images2.alphacoders.com/261/26102.jpg);  padding:0; ">
        <div class="well container-fluid" style="background-color:rgba(47,79,79,0.7); border: none; padding-left:4%; margin-bottom:0;">
            <br />
     
            <div class="col-md-4">
                

                <span class="glyphicon glyphicon-user " style="color:moccasin; cursor:default; padding-right:1%;"> </span>
                <input placeholder=" Author" style="color:darkslategray;  width:90%;" #author/>
                <br />
                <br />

                <span class="glyphicon glyphicon-book " style="color:moccasin;  cursor:default;  padding-right:1%;"> </span>
                <input placeholder=" Title" style="color:darkslategray; width:90%;" #title/>

                <br />
                <br />
                <div class="col-md-6">
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Adult</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Biography</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Children</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Classic</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Crime</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Fantasy</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Fiction</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Mystery</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Novels</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Romance</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Thriller</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="">Young</label>
                    </div>
                </div>
                <br/><br />
</div>
            <div class="col-md-8">
                <span class="glyphicon glyphicon-pencil " style="color:moccasin; cursor:default;  padding-right:1%; vertical-align:top;"> </span>
                <textarea class="form-inline" rows="8" id="comment" style="color:darkslategray; width:95%;" #description></textarea>
                <br /><br />
                <a routerLink="/">
                    <span class="glyphicon glyphicon-remove pull-right" style="border:solid; border-color:moccasin; color:moccasin;  font-size:200%; cursor: pointer; margin-right:2%; padding:1%;"> </span>
                 </a>
                <a routerLink="/"> 
                <input type="submit" value = "Submit" (click)="onSubmit(title,author,description)" class="glyphicon glyphicon-ok pull-right"  style="border:solid; border-color:moccasin; color:moccasin; font-size:200%; cursor: pointer; margin-right:4%; padding:1%; "/>
                </a>
            </div>
            </div>
    </div>
</div>
    `
})
    /*
    <span class="glyphicon glyphicon-ok pull-right" style="border:solid; border-color:moccasin; color:moccasin; font-size:200%; cursor: pointer; margin-right:4%; padding:1%; ">

                </span>
    */
export class NewComponent {
    private id: number;

    constructor(private bookService: BookService) {
    }

    private onSubmit(title: HTMLInputElement, author: HTMLInputElement, description: HTMLInputElement) {
        var book: BookItem = this.bookService.book;
       
        book.Title = title.value;
        book.Description = description.value;
        book.Author = author.value;
       
        this.bookService.addBook(book);
        
    }
}