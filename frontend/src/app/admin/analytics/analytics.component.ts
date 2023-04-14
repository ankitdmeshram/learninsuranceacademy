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
  activeOrderCount: number = 0;
  pendingOrderCount: number = 0;

  isAllLoad: number = 0;
  todayOrderCount: number = 0;
  todayActiveOrderCount: number = 0;
  todayPendingOrderCount: number = 0

  weeklyOrderCount: number = 0;
  weeklyActiveOrderCount: number = 0;
  weeklyPendingOrderCount: number = 0;

  monthlyOrderCount: number = 0;
  monthlyActiveOrderCount: number = 0;
  monthlyPendingOrderCount: number = 0;

  yearlyOrderCount: number = 0;
  yearlyActiveOrderCount: number = 0;
  yearlyPendingOrderCount: number = 0;

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
        this.activeOrders(res);
        this.orderCount = res.length;
        //todays order
        this.dailyOrders(res);
        //last 7 days orders
        this.last7DaysOrders(res);
        // //last 30 days orders
        this.last30DaysOrders(res);
        //last 365 days orders
        this.last365DaysOrders(res);
        this.Loading();
      }, (res: any) => {
        this.Loading();
      })
  }

  TotalSells = (data: any) => {
    for (let order of data) {
      if (order.status == 1)
        this.totalSellCount += order.fee;
    }
  }

  activeOrders = (data: any) => {
    for (let order of data) {
      if (order.status == 1) {
        this.activeOrderCount++;
      } else {
        this.pendingOrderCount++;
      }
    }
  }

  dailyOrders = (data: any) => {
    for (let order of data) {
      let date = new Date(order.created_at)
      let todayDate = new Date();
      if (date.getDate() == todayDate.getDate() && date.getMonth() == todayDate.getMonth() && date.getFullYear() == todayDate.getFullYear()) {
        this.todayOrderCount++;
        if (order.status == 1) {
          this.todayActiveOrderCount++;
        } else {
          this.todayPendingOrderCount++;
        }
      }
    }
  }

  last7DaysOrders = (data: any) => {
    for (let order of data) {
      let date = new Date(order.created_at)
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() - 7);
      if (date > todayDate) {
        this.weeklyOrderCount++;
        if (order.status == 1) {
          this.weeklyActiveOrderCount++;
        } else {
          this.weeklyPendingOrderCount++;
        }
      }
    }
  }

  last30DaysOrders = (data: any) => {
    for (let order of data) {
      let date = new Date(order.created_at)
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() - 30);

      if (date > todayDate) {
        this.monthlyOrderCount++;
        if (order.status == 1) {
          this.monthlyActiveOrderCount++;
        } else {
          this.monthlyPendingOrderCount++;
        }
      }
    }
  }

  last365DaysOrders = (data: any) => {
    for (let order of data) {
      let date = new Date(order.created_at)
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() - 365);

      if (date > todayDate) {
        this.yearlyOrderCount++;
        if (order.status == 1) {
          this.yearlyActiveOrderCount++;
        } else {
          this.yearlyPendingOrderCount++;
        }
      }
    }
  }

}
