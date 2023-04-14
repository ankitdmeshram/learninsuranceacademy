import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

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
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
