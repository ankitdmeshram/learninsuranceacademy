import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(
    private auth: AuthService
  ) {}

  resetPasswordForm = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  resetPassword = () => {
    this.auth.resetPass(this.resetPasswordForm.value)
  }

}
