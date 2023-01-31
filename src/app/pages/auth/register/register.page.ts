import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserType} from "@lib/enums/user-type";
import {FormsModule, NgForm} from "@angular/forms";
import {IDepartment} from "@lib/interfaces/idepartment";
import {DepartmentService} from "@lib/services/department/department.service";
import {PaginationParams} from "@lib/classes/pagination-params";
import {IPaginatedMetadata} from "@lib/interfaces/ipaginated-metadata";
import {AuthService} from "@lib/services";
import {Title} from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  registrationMode: UserType = UserType.STUDENT;
  userType = UserType;
  isLoading = false;
  departments: Array<IDepartment> = [];
  pagination = new PaginationParams()
  paginationMeta: IPaginatedMetadata = {
    "page": 1,
    "take": 10,
    "itemCount": 0,
    "pageCount": 0,
    "hasPreviousPage": false,
    "hasNextPage": true
  };


  constructor(private _deptService: DepartmentService, private _authService: AuthService, private title: Title) {
    this.pagination.take = 25;
  }

  ngOnInit() {
    this.title.setTitle('Register')
    this.getDepts()
  }

  getDepts() {
    this.isLoading = true;
    this._deptService.retrieveDepartments(this.pagination)
      .subscribe(
        (response) => {
          if (response) {
            this.departments = response.data;
            this.paginationMeta = response.meta;
          } else {
            alert("An error occurred, please try again")
          }
        },
        (error) => {
          console.error(error)
          alert(`${error.error?.error || 'An error occurred'}`);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

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
    } else {
      if (this.registrationMode === this.userType.STAFF) {
        this._authService.registerStaff({...form.value, staffId: form.controls['universityId'].value})
      } else {
        this._authService.registerStudent({...form.value, matricNo: form.controls['universityId'].value})
      }
    }
  }
}
