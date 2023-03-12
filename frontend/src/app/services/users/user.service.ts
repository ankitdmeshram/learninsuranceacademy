import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  url: string = window.location.href.includes("localhost") ? "http://localhost:8000/api" : "https://lms-backend.ankitmeshram.in/api";

  Users = () => {
    return this.http.get(`${this.url}/users`);
  }

  updateUser = (data: any) => {
    return this.http.post(`${this.url}/updateuser`, data);
  }



}
