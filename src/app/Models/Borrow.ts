import { IonDatetime } from '@ionic/angular';

export class Borrow {
    isbn:string;
    userId:string;
    transactId:string;
    borrowDate:IonDatetime;
    returnDate:IonDatetime;
    constructor(isbn:string, userId:string){
        this.isbn = isbn;
        this.userId = userId;
        this.transactId = "";
        this.borrowDate = null;
        this.returnDate = null;
    }
}
