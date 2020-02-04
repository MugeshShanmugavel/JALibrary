import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import { BookService } from '../../Services/book.service';

import {CookieService} from 'ngx-cookie-service';

import { RouterModule, Routes, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UserProfile } from '../Models/UserProfile';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isAdmin:any;
  showBooks:any = false;
  constructor(private cookie:CookieService, public bookService:BookService, public alertController:AlertController) {
    this.loadPage();
  }

  async loadPage(){
    this.isAdmin = await this.checkAdmin();
    this.showBooks = true;
  }

  async checkAdmin(){
     return this.getDataFromCookie(); 
  }

  async getDataFromCookie()
  {
    var UserId = this.cookie.get('UserId');
    var UserName = this.cookie.get('UserName');
    if(UserId=="" && UserName==""){
      const alert = this.alertController.create({
        inputs:[{name : 'UserId', placeholder:'Enter your JAId', type:'text'},
          {name : 'Name', placeholder:'Enter your User Name', type:'text'}],
        buttons : [
          {
            text:'Ok',
            handler : (data) => 
              {
                this.setCookie(data); 
              }
          }
        ]
      });
      (await alert).present();
      return await this.isCheckAdmin();
    }
    else{
    return await this.isCheckAdmin();
    }
  }

  async isCheckAdmin()
  {
    if(this.cookie.get('UserId')=="JA125")
     {
       return true;
     }
     else{
      return false;
     }
  }
  setCookie(name:UserProfile){
    console.log(name.UserId);
    console.log(name.Name);
    console.log(JSON.stringify(name));
    this.cookie.set('UserId', name.UserId);
    this.cookie.set('UserName', name.Name);
    this.bookService.AddUser(name.UserId, name.Name);
  }
}
