import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    AnalyticsComponent,
    CoursesComponent,
    UsersComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AngularEditorModule
  ]
})
export class AdminModule { }
