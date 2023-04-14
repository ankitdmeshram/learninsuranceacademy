import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['../admin.component.css', './analytics.component.css']
})
export class AnalyticsComponent {

  constructor(
    private spinner: NgxSpinnerService,
    private course: CourseService,
    private users: UserService
  ) {
    this.Courses()
    this.Users();
    this.Orders();
  }



  courseCount: number = 0;
  userCount: number = 0;
  orderCount: number = 0;
  totalSellCount: number = 0;

  isAllLoad: number = 0;

  Loading = () => {
    this.isAllLoad++;
    if (this.isAllLoad == 3) {
      this.spinner.hide();
    }
  }

  Courses = () => {
    this.spinner.show();
    this.course.viewCourses({ email: null })
      .subscribe((res: any) => {
        this.courseCount = res.length
        this.Loading();
      },
        (err) => {
          this.Loading();
        }
      );
  };

  Users = () => {
    this.spinner.show();
    this.users.Users()
      .subscribe((res: any) => {
        this.userCount = res.length
        this.Loading();
      },
        (err) => {
          this.Loading();
        }
      )
  }

  Orders = () => {
    this.course.myOrders({ email: "null" })
      .subscribe((res: any) => {
        this.TotalSells(res);
        this.orderCount = res.length;
        this.Loading();
      }, (res:any) => {
        this.Loading();
      })
  }

  TotalSells = (data: any) => {
    for(let order of data) {
      this.totalSellCount += order.fee;
    }
  }

}
