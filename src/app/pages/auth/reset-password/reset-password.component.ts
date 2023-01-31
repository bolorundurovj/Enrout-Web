import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Reset Password')
  }
}
