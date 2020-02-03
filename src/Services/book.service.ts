import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  data: any;
  constructor(private http:HttpClient) { 
    this.http = http;
  }
  Borrow(isbn:string, userId:string){
    const result = this.http.post('https://ja-library.azurewebsites.net/api/transaction/borrow', {isbn, userId}).subscribe(res=>console.log(res));
    console.log(result);
  }
}
