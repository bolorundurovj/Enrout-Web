import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard, NoAuthGuard} from "@lib/guards";
import {StaffLayoutComponent} from "@pages/staff/staff-layout/staff-layout.component";
import {StaffGuard} from "@lib/guards/staff.guard";
import {StudentLayoutComponent} from "@pages/student/student-layout/student-layout.component";
import {StudentGuard} from "@lib/guards/student.guard";
import {NotFoundPage} from "@pages/screens/not-found/not-found.page";
import {NotificationComponent} from "@pages/screens/notification/notification.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => (import('@pages/auth/auth.module')).then((m) => m.AuthModule),
    canLoad: [NoAuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => (import('@pages/home/home.module')).then((m) => m.HomeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'staff',
    component: StaffLayoutComponent,
    loadChildren: () => (import('@pages/staff/staff.module')).then((m) => m.StaffModule),
    canLoad: [AuthGuard, StaffGuard]
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    loadChildren: () => (import('@pages/student/student.module')).then((m) => m.StudentModule),
    canLoad: [AuthGuard, StudentGuard]
  },
  {
    path: 'settings',
    loadChildren: () => (import('@pages/settings/settings.module')).then((m) => m.SettingsModule),
    canLoad: [AuthGuard],
  },
  {path: 'notifications', component: NotificationComponent},
  {
    path: '**',
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
