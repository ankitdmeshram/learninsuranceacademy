import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard.component';
import { LessonsComponent } from './lessons/lessons.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'lessons/:id',
        component: LessonsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
