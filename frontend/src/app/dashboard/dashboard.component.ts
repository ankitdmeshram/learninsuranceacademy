import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isOpenSidebar: boolean = true;
  constructor(
    private router: Router
  ) {
    if (screen.width < 992) {
      this.isOpenSidebar = false;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isOpenSidebar = false;
        }
      })
    } else {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url.includes('lessons')) {
            this.isOpenSidebar = false;
          } else {
            this.isOpenSidebar = true;
          }
        }
      })
    }
  }
}
