import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CourseService } from 'src/app/services/course.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../dashboard.component.css', './orders.component.css']
})
export class OrdersComponent {

  constructor(
    private auth: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private course: CourseService
  ) {
    spinner.show()
    this.auth.getUser().then((res: any) => {
      this.userEmail = res?.multiFactor.user.email;
      this.Order();
    },
      (err) => {
        this.toastr.error("Something went wrong");
        this.spinner.hide();
      }
    )
  }
  userEmail: any;
  myOrders: any;
  courses: any;

  Order = () => {
    this.course.myOrders({ email: this.userEmail })
      .subscribe((res: any) => {
        this.myOrders = res;
        this.Courses();
        // this.spinner.hide();//
      },
        (err) => {
          this.toastr.error("Something went wrong");
          this.spinner.hide();
        }
      )
  }

  Courses = () => {
    this.course.viewCourses({ email: null })
      .subscribe((res: any) => {
        this.courses = res;
        for (let course of this.courses) {
          for (let order of this.myOrders) {
            order['course_name'] = course.course_name;
          }
        }
        this.spinner.hide();
      },
        (err) => {
          this.toastr.error("Something went wrong!");
          this.spinner.hide();
        }
      )
  }

}
