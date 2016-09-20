import {BookItem} from './../Models/BookItem';

export default class Action { }

export class AddAction extends Action {
    public bookID: number;
    public title: string;
    public author: string;
    public imgSrc: URL;
    public description: string;
    public rating: number;

    constructor(Title: string, Author: string, ImgScr: URL, Description?: string, Rating?: number) {
        super();
        this.title = Title;
        this.description = Description;
        this.author = Author;
        this.imgSrc = ImgScr;
        this.rating = Rating;
    }
}

export class BookItemAction extends Action {
    public bookItem: BookItem;

    constructor(bookItem: BookItem) {
        super();
        this.bookItem = bookItem;
    }
}

export class RemoveAction extends BookItemAction {
    constructor(bookItem: BookItem) {
        super(bookItem);
    }
}
export class ChangeValueAction extends BookItemAction {
    public newValue: string;
    public changed: string;

    constructor(bookItem: BookItem, newValue: string, changed: string) {
        super(bookItem);

        this.newValue = newValue;
        this.changed = changed;
    }
}
