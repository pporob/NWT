import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetails } from './Components/book.component'
import { BookList } from './Components/books.component'
import { AppComponent } from './app.component'
import {NewComponent} from './Components/new.component'


const appRoutes: Routes = [
    { path: 'Detail/:id', component: BookDetails },
    { path: 'New', component: NewComponent },
    { path: '', component: BookList },
    { path: '**', component: AppComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);