import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../dashboard.component.css', './header.component.css']
})
export class HeaderComponent {
  constructor(
    private auth: AuthService
  ) {

  }

  signOut = () => {
    this.auth.signOut()
  }
}
