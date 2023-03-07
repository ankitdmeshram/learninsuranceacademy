import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../admin.component.css', './courses.component.css']
})
export class CoursesComponent {

  constructor(
    private course: CourseService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.Courses()
  }

  isAddCourseForm: boolean = false;
  isEditCourseForm: boolean = false;
  selectedCourse: number = 0;

  courses: any = []

  courseForm = new FormGroup({
    id: new FormControl(''),
    course_name: new FormControl('', Validators.required),
    course_description: new FormControl(''),
    course_price: new FormControl('', Validators.required),
    course_discount_price: new FormControl(''),
    course_duration: new FormControl(''),
    course_extended_duration: new FormControl(''),
    course_image: new FormControl(''),
    course_instructor: new FormControl(''),
    created_at: new FormControl(''),
    updated_at: new FormControl(''),

  })

  get cname() {
    return this.courseForm.get('course_name')!;
  }

  get price() {
    return this.courseForm.get('course_price')!;
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

  addCourse = () => {
    this.spinner.show()
    this.course.addCourse(this.courseForm.value)
      .subscribe((res) => {
        console.log(res)
        this.courses.push(this.courseForm.value);
        this.isAddCourseForm = false;
        this.courseForm.reset()
        this.toastr.success("Course added successfully");
        this.spinner.hide();
        this.viewCourse(this.courses[this.courses.length-1], this.courses.length-1)
      },
        (err) => {
          this.toastr.error("Something went wrong");
          this.spinner.hide();
        }
      )

  }

  deleteCourse = (course: any, i: number) => {

    if (confirm("Are you sure you want to delete this course ? ")) {
      this.spinner.show();
      this.course.deleteCourse(course)
        .subscribe((res) => {
          this.toastr.success("Course Deleted Successfully");
          this.courses.splice(i, 1);
          this.spinner.hide();
        },
          (err) => {
            this.toastr.error("Something went wrong");
            this.spinner.hide()
          })
    }
  }

  viewCourse = (course: any, i: number) => {
    this.courseForm.setValue(course);
    this.isAddCourseForm=true;
    this.isEditCourseForm=true;
    this.selectedCourse = i;
  }

  updateCourse = () => {
    this.spinner.show();
    this.course.updateCourse(this.courseForm.value)
    .subscribe((res:any) => {
      this.toastr.success("Course updated successfully");
      this.cancel();
      this.courses[this.selectedCourse]=res.success;
      this.selectedCourse=0;
      this.spinner.hide();
    },
    (err) => {
      this.toastr.error("Something went wrong");
      this.spinner.hide();
    })

  }

  cancel = () => {
    this.isAddCourseForm=false;
    this.isEditCourseForm=false;
    this.courseForm.reset();
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
