import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CourseService } from 'src/app/services/course.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../dashboard.component.css', './courses.component.css']
})
export class CoursesComponent {

  constructor(
    private spinner: NgxSpinnerService,
    private course: CourseService,
    private toastr: ToastrService,
    private helper: HelperService,
    private auth: AuthService
  ) {
    spinner.show()
    this.auth.getUser().then((res: any) => {
      this.userEmail = res?.multiFactor.user.email;
      this.course.myOrders({ email: this.userEmail }).subscribe((res: any) => {
        this.myOrders = res;
        this.Courses();
      })
    })
    helper.loadSideBarMenu()
  }

  userEmail: any;
  lessons: any = [];
  courses: any = [];
  myOrders: any = [];

  isLoading = true;

  purchasedCourseList: any = [];

  toNavigate = (url: string) => {
    this.viewLessons()
    this.helper.toNavigate(`./dashboard/lessons/${url}`)
  }

  Courses = () => {
    this.spinner.show()
    this.course.viewCourses({ email: this.userEmail })
      .subscribe((res) => {
        this.courses = res;
        for(let course of this.courses)
        {
          for(let order of this.myOrders)
          {
            if(course.id == order.course_id)
            {
              if(order.status == 1)
              this.purchasedCourseList.push(course)
            }
          }
        }
        this.spinner.hide();
        this.isLoading = false;
      },
        (err) => {
          this.toastr.error("Course not found");
          this.spinner.hide();
          this.isLoading = false;
        }
      )
  }

  viewLessons = () => {
    this.course.viewLessons()
      .subscribe((res: any) => {
        res.filter((res: any) => {
          let data = {
            link: "",
            text: res.lesson_name
          }
          this.lessons.push(data)
        })
      })
  }
}
