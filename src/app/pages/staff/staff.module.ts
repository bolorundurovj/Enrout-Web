import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import {DashboardComponent} from "@pages/staff/dashboard/dashboard.component";
import {DocumentDetailComponent} from "@pages/staff/document-detail/document-detail.component";
import {DocumentsComponent} from "@pages/staff/documents/documents.component";
import {StaffLayoutComponent} from "@pages/staff/staff-layout/staff-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LibModule} from "@lib/lib.module";


@NgModule({
  declarations: [DashboardComponent, DocumentDetailComponent, DocumentsComponent, StaffLayoutComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LibModule
  ]
})
export class StaffModule { }
