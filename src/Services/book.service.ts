import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Borrow} from '../app/Models/Borrow';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  data: any;
  items:any;

  constructor(private http:HttpClient) { 
    this.http = http;
  }
  Borrow(isbn:string, userId:string){
    const borrow = new Borrow(isbn, userId);
    var res = this.http.post('https://ja-library.azurewebsites.net/api/transaction/', borrow).subscribe(res => res); 
  }

  Return(isbn:string, userId:string){
    const borrow = new Borrow(isbn, userId);
    var res = this.http.post('https://ja-library.azurewebsites.net/api/transaction/', borrow).subscribe(res => res);
  }
 
  AllBooks(id:string){
    return this.http.get(`https://ja-library.azurewebsites.net/user/${id}/borrows`);
}
}
