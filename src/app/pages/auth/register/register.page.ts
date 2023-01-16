import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserType} from "@lib/enums/user-type";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {
  registrationMode: UserType = UserType.STUDENT;
  userType = UserType;
  isLoading = false;

  setUserType(type: string): void {
    switch (type) {
      case 'staff':
        this.registrationMode = UserType.STAFF;
        break;
      case 'student':
        this.registrationMode = UserType.STUDENT;
        break;
      default:
        this.registrationMode = UserType.STUDENT;
    }
  }

  registerUser(form: NgForm) {
    this.isLoading = true;
    if (form.invalid) {
      return;
    }
  }
}
