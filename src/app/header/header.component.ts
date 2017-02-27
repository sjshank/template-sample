import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  activeUInfo: boolean = false;
  activeAlert: boolean = false;

  toggleUInfo(){
    this.activeUInfo = !this.activeUInfo;
  }
  toggleAlert(){
    this.activeAlert = !this.activeAlert;
  }
  
}
