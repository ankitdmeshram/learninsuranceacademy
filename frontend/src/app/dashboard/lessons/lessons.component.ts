import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/course.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {

  lessonsCopy: any;
  constructor(
    private course: CourseService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) {
    this.spinner.show();
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.viewLessons();
  }

  courseId: any;
  lessons: any = []
  currentLesson: any = null;
  lessonUrl: any = null

  selectLesson = (lesson: any) => {
    this.currentLesson = lesson
    this.lessonUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.currentLesson.lesson_url}?controls=1`)
  }

  viewLessons = () => {
    this.course.viewLessons()
      .subscribe((res: any) => {
        res.filter((res: any) => {
          if (res.course_id == this.courseId) {
            this.lessons.push(res);
          }
        })
        this.selectLesson(this.lessons[0])
        this.spinner.hide();
      },
        (err) => {
          this.toastr.error("Something went wrong");
        }
      )
  }
}
