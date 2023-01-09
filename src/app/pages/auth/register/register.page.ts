import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {}
