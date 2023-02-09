import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "@pages/student/dashboard/dashboard.component";
import {StudentLayoutComponent} from "@pages/student/student-layout/student-layout.component";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {LibModule} from "@lib/lib.module";
import { DocumentsComponent } from './documents/documents.component';


@NgModule({
  declarations: [DashboardComponent, StudentLayoutComponent, DocumentsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    LibModule
  ]
})
export class StudentModule {
}
