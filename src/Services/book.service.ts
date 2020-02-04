import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Borrow} from '../app/Models/Borrow';
import { UserProfile } from 'src/app/Models/UserProfile';

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
    console.log(borrow);
    var res = this.http.post('https://ja-library.azurewebsites.net/api/transaction/', borrow).subscribe(res => res); 
    console.log(res);
  }

  Return(isbn:string, userId:string){
    const borrow = new Borrow(isbn, userId);
    var res = this.http.post('https://ja-library.azurewebsites.net/api/transaction/'+isbn,'').subscribe(res => res);
  }
 
  AllBooks(id:string){
   // this.demo('e731e22b-e01a-4a18-aa9b-3a5332e9a54e');
    //return this.http.get(`https://ja-library.azurewebsites.net/api/Users/id?userId=${id}`);
    return this.http.get('https://ja-library.azurewebsites.net/api/Users/id',{
      params :{
        userId:id
      }
    })
}

  demo(id:string){
    return this.http.post('https://ja-library.azurewebsites.net/api/transaction/'+id, '').subscribe(res => console.log(res));
  }

  AllAvailableBooks()
  {
    return this.http.get('https://ja-library.azurewebsites.net/api/book/all');
  }

  AddUser(userId:string, userName:string){
    const user = new UserProfile(userId, userName);
    this.http.post('https://ja-library.azurewebsites.net/api/Users/add',user).subscribe(res => res);
  }

  CheckAvailability(isbn:string)
  {
    return this.http.get('https://ja-library.azurewebsites.net/checkAvailability/'+isbn);
  }
}
