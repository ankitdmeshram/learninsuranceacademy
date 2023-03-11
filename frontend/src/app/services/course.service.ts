import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = window.location.href.includes("localhost") ? "http://localhost:8000/api" : "https://lms-backend.ankitmeshram.in/api";


  constructor(
    private http: HttpClient
  ) { }

  viewCourses = () => {
    return this.http.get(`${this.url}/courses`);
  }

  addCourse = (data: any) => {
    return this.http.post(`${this.url}/addcourse`, data);
  }

  deleteCourse = (data: any) => {
    return this.http.post(`${this.url}/deletecourse`, data);
  }

  updateCourse = (data: any) => {
    return this.http.post(`${this.url}/updatecourse`, data);
  }

  viewLessons = () => {
    return this.http.get(`${this.url}/lessons`);
  }

  addLesson = (data: any) => {
    return this.http.post(`${this.url}/addlesson`, data);
  }

  updateLesson = (data: any) => {
    return this.http.post(`${this.url}/updatelesson`, data);
  }

  deleteLesson = (data: any) => {
    return this.http.post(`${this.url}/deletelesson`, data);
  }

}
