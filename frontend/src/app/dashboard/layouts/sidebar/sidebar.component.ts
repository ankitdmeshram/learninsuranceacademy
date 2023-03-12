import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../dashboard.component.css', './sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    private helper: HelperService
  ) {
    this.sideBarMenu = helper.loadSideBarMenu()
  }

  sideBarMenu:any;

  toNavigate = (url: any) => {
    this.helper.toNavigate(url)
  }

}
