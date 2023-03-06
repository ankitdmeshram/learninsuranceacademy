import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    AnalyticsComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
