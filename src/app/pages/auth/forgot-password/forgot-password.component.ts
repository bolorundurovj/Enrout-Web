import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Forgot Password')
  }
}
