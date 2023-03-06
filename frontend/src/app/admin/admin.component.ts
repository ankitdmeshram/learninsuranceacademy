import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  isOpenSidebar:boolean = true;

  constructor() {
    if(screen.width < 992)
    {
      this.isOpenSidebar = false;
    }
  }

}
