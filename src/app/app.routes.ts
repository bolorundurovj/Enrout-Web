import {Routes} from '@angular/router';
import {AuthGuard, NoAuthGuard} from '@lib/guards';
import {StudentLayoutComponent} from "@pages/student/student-layout/student-layout.component";
import {StaffLayoutComponent} from "@pages/staff/staff-layout/staff-layout.component";
import {StaffGuard} from "@lib/guards/staff.guard";
import {StudentGuard} from "@lib/guards/student.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: async () => (await import('@pages/auth/auth.routes')).ROUTES,
    canLoad: [NoAuthGuard],
  },
  {
    path: 'home',
    loadChildren: async () => (await import('@pages/home/home.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'staff',
    component: StaffLayoutComponent,
    loadChildren: async () => (await import('@pages/staff/staff.routes')).ROUTES,
    canLoad: [AuthGuard, StaffGuard]
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    loadChildren: async () => (await import('@pages/student/student.routes')).ROUTES,
    canLoad: [AuthGuard, StudentGuard]
  },
  {
    path: ':username',
    loadChildren: async () => (await import('@pages/profile/profile.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: async () => (await import('@pages/settings/settings.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: async () => (await import('@pages/screens/not-found/not-found.page')).NotFoundPage,
  },
];
