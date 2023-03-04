import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './userdashboard.component';


const routes: Routes = [
  {
    path: '',
    component: UserdashboardComponent,
  //   children: [
  //     {
  //       path: '',
  //       component:
  //     },
  //     {
  //     path: 'projects',
  //     component: ProjectsComponent
  //     },
  //     {
  //     path: 'project/:id',
  //     component: ProjectDetailsComponent
  //     }
  // ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
