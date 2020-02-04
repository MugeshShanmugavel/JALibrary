import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';

import { CookieService } from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  data:any;
  userId:any;
  books:any;
  ngOnInit(){
    this.userId = this.cookie.get('UserId');
    this.showBooks(this.userId);
  }
  constructor(public BookServices:BookService, public cookie:CookieService, public alertController:AlertController) {}

  showBooks(userId:string)
  {
    this.BookServices.AllBooks(userId).subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.books = this.data.booksBorrowed;
      console.log('data', this.books)
    });
  }

  return(isbn:string){
    this.BookServices.Return(isbn, this.userId);
    this.showBooks(this.userId);
  }
}
