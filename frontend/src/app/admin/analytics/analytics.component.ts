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

  }



  courseCount: number = 0;
  userCount: number = 0;

  isAllLoad: number = 0;

  Loading = () => {
    if (this.isAllLoad == 2) {
      this.spinner.hide();
    }
  }

  Courses = () => {
    this.spinner.show();
    this.course.viewCourses()
      .subscribe((res: any) => {
        console.log(res)
        this.courseCount = res.length
        this.isAllLoad++;
        this.Loading()
      },
        (err) => {
          this.isAllLoad++;
          this.Loading()
        }
      );
  };

  Users = () => {
    this.spinner.show();
    this.users.Users()
      .subscribe((res: any) => {
        this.userCount = res.length
        this.isAllLoad++;
        this.Loading()
      },
        (err) => {
          this.spinner.hide()
          this.isAllLoad++;
          this.Loading()
        }
      )
  }

}
