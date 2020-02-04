import { Component } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private appComponent:AppComponent) {}

}
