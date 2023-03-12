import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
    private helper: HelperService
  ) {
    this.Courses();
    helper.loadSideBarMenu()
  }
  lessons: any = [];
  courses: any = [];

  toNavigate = (url: string) => {
    this.viewLessons()
    this.helper.toNavigate(`./dashboard/lessons/${url}`)
  }

  Courses = () => {
    this.spinner.show()
    this.course.viewCourses()
      .subscribe((res) => {
        this.courses = res;
        this.spinner.hide();
      },
        (err) => {
          this.toastr.error("Course not found");
          this.spinner.hide();
        }
      )
  }

  viewLessons = () => {
    this.course.viewLessons()
      .subscribe((res: any) => {
        console.log(res)
        res.filter((res:any) => {
          let data = {
            link: "",
            text: res.lesson_name
          }
          this.lessons.push(data)
        })
      })
  }
}
