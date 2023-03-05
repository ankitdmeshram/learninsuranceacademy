import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    console.log(this.url)
   }

  url: string = window.location.href.includes("localhost") ? "http://localhost:8000/api" : "https://lms-backend.ankitmeshram.in/api";

  signIn = (data: any) => {
    const { email, password } = data;
    return this.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.toastr.success("Sign In Successfully");
        this.router.navigate(['/dashboard']);
        console.log(res)
        this.spinner.hide()
      }).catch((err) => {
        this.toastr.error("Something went wrong");
        console.log(err);
        this.spinner.hide()
      })
  }

  signUp = (data: any) => {
    const { email, password, phone, name } = data;
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((res:any) => {
        console.log(res)
        // let id = /
        let data = {
          "name": name,
          "email": email,
          "phone": phone,
          "guid": res.user.multiFactor.user.uid
        }
        this.http.post(`${this.url}/signup`, data).subscribe((res) => console.log(res))

        console.log(res);
        this.toastr.success("SignUp Successfully");
        this.router.navigate(['/dashboard'])
        this.spinner.hide()
      }).catch((err) => {
        this.toastr.error("Something went wrong");
        console.log(err);
        this.spinner.hide()
      })
  }

  resetPass = (val: any) => {
    const { email } = val;
    return this.auth.sendPasswordResetEmail(email)
      .then((res) => {
        this.toastr.success("Password Link Shared Succesffully On Mail")
        this.router.navigate(['./signin']);
        this.spinner.hide()
      }).catch((err) => {
        this.toastr.error("Something went wrong");
        console.log(err);
        this.spinner.hide()
      })
  }

  getUser = () => {
    return this.auth.currentUser
  }

  signOut = () => {
    return this.auth.signOut()
    .then((res) => {
      this.router.navigate(['../']);
      this.toastr.success("Sign Out Successfully");
    }).catch((err) => {
      this.toastr.error("Something went wrong");
    })
  }



}
