import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private router: Router
  ) { }

  sideBarMenu: any = [];

  loadSideBarMenu = (menu:any = null) => {
    if (this.router.url.includes("dashboard")) {
      return this.sideBarMenu = [
        {
          link: "./dashboard/courses",
          text: "Courses"
        },
        {
          link: "./dashboard/orders",
          text: "Orders"
        }
        // {
        //   link: "./dashboard",
        //   text: "Profile"
        // },
      ]
    } else if (this.router.url.includes("admin")) {
      return this.sideBarMenu = [
        {
          link: "./admin",
          text: "Dashboard"
        },
        {
          link: "./admin/courses",
          text: "Courses"
        },
        {
          link: "./admin/orders",
          text: "Orders"
        },
        {
          link: "./admin/users",
          text: "Users"
        },
      ]
    }

    return
  }

  toNavigate = (url: any) => {
    this.loadSideBarMenu();
    this.router.navigate([`${url}`]);
  }



}
