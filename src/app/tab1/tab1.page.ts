import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {CookieService} from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from '../Models/UserProfile';

import { BookService } from '../../Services/book.service';
import {TabsPage} from '../tabs/tabs.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl : NavController, public BookServices:BookService, public cookie:CookieService, public alertController:AlertController, public tabs:TabsPage) {
    this.showAllAvailableBooks();
  }
  
  booksAvailable:any;
  showAllAvailableBooks(){
    this.BookServices.AllAvailableBooks().subscribe(res=> {
      this.booksAvailable = res;
      console.log(this.booksAvailable);
    })
  }

  borrow(book:any){
    var userId = this.cookie.get('UserId');
    this.BookServices.Borrow(book.isbn, userId);   
    this.showAllAvailableBooks();
  }
}
