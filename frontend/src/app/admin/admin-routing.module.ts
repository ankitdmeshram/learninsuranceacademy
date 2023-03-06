import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AnalyticsComponent
      },
      {
      path: 'courses',
      component: CoursesComponent
      },
      // {
      // path: 'project/:id',
      // component: ProjectDetailsComponent
      // }
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
