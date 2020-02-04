import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {CookieService} from 'ngx-cookie-service';

import { AlertController } from '@ionic/angular';

import { UserProfile } from '././Models/UserProfile';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cookie : CookieService,
    private alertController : AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.isAdmin();
    });
  }

  async isAdmin()
  {
    var UserId = this.cookie.get('UserId');
    var UserName = this.cookie.get('UserName');
    if(UserId!="" && UserName!=""){
      // this.BookServices.Borrow(isbn, UserId);
      }
    else{
    const alert = this.alertController.create({
      inputs:[{name : 'UserId', placeholder:'Enter your JAId', type:'text'},
        {name : 'UserName', placeholder:'Enter your User Name', type:'text'}],
      buttons : [
        {
          text:'Ok',
          handler : (data) => {this.setCookie(data);}
        }
      ]
    });
    (await alert).present();
  }
  }

  setCookie(name:UserProfile){
    console.log(name.UserId);
    console.log(JSON.stringify(name));
    this.cookie.set('UserId', name.UserId);
    this.cookie.set('UserName', name.UserName);
  }
}
