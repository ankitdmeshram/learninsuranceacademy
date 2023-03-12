import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../admin.component.css','./users.component.css']
})
export class UsersComponent {
  users:any = []

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private user: UserService
  ) {
    this.spinner.show();
    this.viewUsers();
  }

  isEditUserForm: boolean = false;
  currentUser : number = -1;

  userForm = new FormGroup({
    id : new FormControl(''),
    name : new FormControl('', Validators.required),
    email : new FormControl({value: '', disabled: true}, Validators.required),
    phone : new FormControl(''),
    role : new FormControl('', Validators.required),
    guid : new FormControl(''),
    created_at : new FormControl(''),
    updated_at : new FormControl('')

  })

  viewUsers = () => {
    this.userService.Users()
    .subscribe((res:any) => {
      this.users = res;
      this.spinner.hide();
    },
    (err) => {
      this.toastr.error("Something went wrong!");
      this.spinner.hide();
    }
    )
  }

  viewUser = (user: any, i: number) => {
    this.isEditUserForm = true;
    this.userForm.setValue(user);
    this.currentUser = i;
  }

  updateUser = () => {
    this.spinner.show();
    this.user.updateUser(this.userForm.value)
    .subscribe((res:any) => {
      this.users[this.currentUser]=res.success;
      this.isEditUserForm = false;
      this.spinner.hide();
      this.toastr.success("User Updated Succesfully");
      this.currentUser = -1;
    },
    (err) => {
      this.toastr.error("Something went wrong!");
      this.spinner.hide();
    }
    )
  }

  cancel = () => {
    this.userForm.reset();
    this.isEditUserForm = false;
    this.currentUser = -1;
  }

}
