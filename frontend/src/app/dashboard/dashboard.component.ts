import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isOpenSidebar:boolean = true;

  constructor() {
    if(screen.width < 992)
    {
      this.isOpenSidebar = false;
    }
  }

}
