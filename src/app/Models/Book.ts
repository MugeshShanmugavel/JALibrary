export class Book{
    title:string;
    author:string;
    isbn:string;
    rating:any;
    numberofcopies:number;
    
    constructor(title:string, author:string, isbn:string){
        this.author = author;
        this.isbn = isbn;
        this.title = title;
        this.rating = null;
        this.numberofcopies = 1;

    }
}