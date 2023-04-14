import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../admin.component.css', './orders.component.css']
})
export class OrdersComponent {

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private course: CourseService
  ) {
    spinner.show()
    this.Order();
  }
  userEmail: any;
  myOrders: any;
  courses: any;
  isLoading: number = 0;

  Order = () => {
    this.course.myOrders({ email: "null" })
      .subscribe((res: any) => {
        this.myOrders = res;
        this.Courses();
        this.isLoading++;
      },
        (err) => {
          this.toastr.error("Something went wrong");
          this.spinner.hide();
          this.isLoading++;
        }
      )
  }

  Courses = () => {
    this.course.viewCourses({ email: null })
      .subscribe((res: any) => {
        this.courses = res;
        for (let order of this.myOrders) {
          for (let course of this.courses) {
            if (order.course_id == course.id) {
              order['course_name'] = course.course_name;
            }
          }
        }
        this.isLoading++;
        this.spinner.hide();
      },
        (err) => {
          this.toastr.error("Something went wrong!");
          this.spinner.hide();
          this.isLoading++;
        }
      )
  }

}
