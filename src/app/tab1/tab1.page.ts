import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {CookieService} from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';
import { Book } from '../Models/Book';

import { BookService } from '../../Services/book.service';
import {TabsPage} from '../tabs/tabs.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isAvailable:any;
  isItemAvailable:any = false;
  bookFiltertedList:any;
  constructor(public navCtrl : NavController, public BookServices:BookService, public cookie:CookieService, public alertController:AlertController, public tabs:TabsPage) {
    this.showAllAvailableBooks();

  }
  
  booksAvailable:any;
  showAllAvailableBooks(){
    this.BookServices.AllAvailableBooks().subscribe(res=> {
      this.booksAvailable = res;
    })
  }

  borrow(book:any){
    var userId = this.cookie.get('UserId');
    this.BookServices.Borrow(book.isbn, userId);   
    this.showAllAvailableBooks();
  }

  async CheckAvailability(book:any){
    if(this.cookie.get('UserId')==""){
      this.tabs.getDataFromCookie();
    }
    else{
    console.log(book);
    this.BookServices.CheckAvailability(book.isbn).subscribe(async res=>{
      console.log(res);
      this.isAvailable = res;
      console.log(this.isAvailable.statusCode);
      if(this.isAvailable.statusCode == 200)
      {
        const alert = this.alertController.create({
          message:'Book available',
          buttons :[
            {
              text:'Borrow',
              handler: () =>{
                this.borrow(book);
              }
            }
          ]
        });
        (await alert).present();
      }
      else{
        const alert = this.alertController.create({
          message:'Book is not available',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        (await alert).present();
      }
    })
  }
  }
  getItems(ev:any)
  {
    const value = ev.target.value;
    if(value && value.trim()!=''){
      this.isItemAvailable = true;
      this.bookFiltertedList = this.booksAvailable.filter((book:Book) => !book.title.toLowerCase().search(value.toLowerCase()));
    }
    else{
      this.isItemAvailable = false;
    }
  }
}
