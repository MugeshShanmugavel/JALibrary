import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {CookieService} from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from '../Models/UserProfile';

import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl : NavController, public BookServices:BookService, public cookie:CookieService, public alertController:AlertController) {}
  // async scan(isbn:string){
  //   var UserId = this.cookie.get('UserId');
  //   var UserName = this.cookie.get('UserName');
  //   if(UserId!="" && UserName!=""){

  //      this.BookServices.Borrow(isbn, UserId);}
  //   else{
  //     const alert = this.alertController.create(
  //       {inputs:[{name : 'UserId', placeholder:'Enter your JAId', type:'text'},
  //         {name : 'UserName', placeholder:'Enter your JAName', type:'text'}],
  //       buttons : [
  //         {
  //           text:'Ok',
  //           handler : (data) => {this.setCookie(data);}
  //         }
  //       ]
  //     });
  //     (await alert).present();
  //   }
  // }

  setCookie(name:UserProfile){
    console.log(name.UserId);
    console.log(JSON.stringify(name));
    this.cookie.set('UserId', name.UserId);
    this.cookie.set('UserName', name.UserName);
  }
}
