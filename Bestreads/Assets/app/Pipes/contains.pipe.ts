import { Pipe, PipeTransform } from '@angular/core';
import {BookItem} from "./../Models/BookItem";

@Pipe({ name: "contains", pure: false })
export default class ContainsPipe {
    transform(items: BookItem[], keyword: string) {
        
        if (keyword == null || keyword.trim() == "") { return items; }

        keyword = keyword.toLowerCase();

        return items.filter(item => (item.Title.toLowerCase().indexOf(keyword) != -1 || item.Author.toLowerCase().indexOf(keyword) != -1));
    }
}