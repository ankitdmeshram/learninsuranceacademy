import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/services/course.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {
  constructor(
    private course: CourseService,
    private helper: HelperService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute

  ) {

    this.courseId = this.route.snapshot.paramMap.get('id');
    // this.helper.loadSideBarMenu()
  }

  ngViewInit() {
    // this.helper.loadSideBarMenu()

  }

  courseId: any;
  lessons: any = []

  viewLessons = () => {
    this.course.viewLessons()
      .subscribe((res: any) => {

      })
  }

}
