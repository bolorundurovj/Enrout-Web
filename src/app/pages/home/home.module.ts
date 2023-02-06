import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomePage} from "@pages/home/home.page";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
