export class BookItem{
    public BookID: number;
    public Title: string;
    public Author: string;
    public ImgSrc: URL;
    public Description: string;
    public Rating: number;
    public Tags: string[];

    constructor(Title: string, Author: string, ImgSrc: URL, BookID?: number, Description?: string, Tags?: string[], Rating?: number) {
        this.BookID = BookID ? BookID : -1;
        this.Title = Title;
        this.Description = Description;
        this.Author = Author;
        this.ImgSrc = ImgSrc;
        this.Tags = Tags;
        this.Rating = Rating;
    }
}