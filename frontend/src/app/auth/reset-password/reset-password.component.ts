import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  resetPasswordForm = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  resetPassword = () => {
    this.spinner.show();
    this.auth.resetPass(this.resetPasswordForm.value)
  }

}
