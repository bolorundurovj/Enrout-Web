import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {JwtInterceptor, ServerErrorInterceptor} from "@lib/interceptors";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@pages/auth/auth.module";
import {StaffModule} from "@pages/staff/staff.module";
import {HomeModule} from "@pages/home/home.module";
import {StudentModule} from "@pages/student/student.module";
import {LibModule} from "@lib/lib.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "@env/environment";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    StaffModule,
    HomeModule,
    StudentModule,
    LibModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
}
