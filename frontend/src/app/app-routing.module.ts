import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedLogin = () => redirectUnauthorizedTo(['signin'])
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/userdashboard/userdashboard.module').then(m => m.UserDashboardModule),
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedLogin}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/userdashboard/userdashboard.module').then(m => m.UserDashboardModule),
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedLogin}
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
