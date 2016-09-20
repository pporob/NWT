import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'
import { BookDetails } from'./Components/book.component'
import { BookList } from './Components/books.component'
import {NewComponent} from './Components/new.component'
import {RatingComponent} from './Components/rating.component';
platformBrowserDynamic().bootstrapModule(AppModule)
