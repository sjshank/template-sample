import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  expandSideBar: boolean = false;
  moreOptn: boolean = false;
  switchBtn: boolean = false;

      toggleSideBarBtn(){
        this.expandSideBar = !this.expandSideBar;
      }    

      toggleOption(){
        this.moreOptn = !this.moreOptn;
      }

      toggleSwitch(){
        this.switchBtn = !this.switchBtn;
      }
}
