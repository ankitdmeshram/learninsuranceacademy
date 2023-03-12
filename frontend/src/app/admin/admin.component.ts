import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  userEmail: string = ""
  isOpenSidebar: boolean = true;
  usersData:any = []
  constructor(
    private user: UserService,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    if (screen.width < 992) {
      this.isOpenSidebar = false;
    }

    let userDetails = this.auth.getUser().then((res: any) => {
      this.userEmail = res.multiFactor.user.email
    })
    this.user.Users()
      .subscribe((res: any) => {
        this.usersData = res;
        this.usersData.filter((res:any) => {
          if(this.userEmail == res.email)
          {
            if(res.role != 87)
            {
              this.toastr.error("You are not allowed to visit admin site");
              this.router.navigate(['../'])
            }

          }
        })
      })


  }

}
