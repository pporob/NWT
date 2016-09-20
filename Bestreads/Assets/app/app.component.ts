import { Component } from '@angular/core'

import { Routes, ROUTER_DIRECTIVES, RouterModule } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import {BookDetails} from './Components/book.component';
import {BookList} from './Components/books.component';
import {RatingComponent} from './Components/rating.component';

@Component({
    selector: 'my-app',
    directives: [BookList, ROUTER_DIRECTIVES, BookDetails],
    providers: [HTTP_PROVIDERS],
    template: `
               <router-outlet></router-outlet>     
              `
})

export class AppComponent {
}