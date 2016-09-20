import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component'
import { BookDetails } from './Components/book.component'
import { BookList } from './Components/books.component'
import ContainsPipe from './Pipes/contains.pipe';
import {NewComponent} from './Components/new.component'
import {RatingComponent} from './Components/rating.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [BookDetails, ContainsPipe,AppComponent, BookList, NewComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent],
})
export class AppModule { }