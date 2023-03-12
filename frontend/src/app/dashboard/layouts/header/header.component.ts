import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../dashboard.component.css', './header.component.css']
})
export class HeaderComponent {
  usersData: any;
  userEmail: any;

  constructor(
    private auth: AuthService,
    private user: UserService
  ) {

    this.auth.getUser().then((res: any) => {
      this.userEmail = res?.multiFactor.user.email
    })

    this.user.Users()
      .subscribe((res: any) => {
        this.usersData = res;
        this.usersData.map((res: any) => {
          if (this.userEmail == res.email) {
            this.usersData = res;
            if(this.usersData.role == 100)
            {
              this.auth.signOut()
            }
          }
        })
      })
  }


  signOut = () => {
    this.auth.signOut()
  }
}
