import {Routes} from "@angular/router";
import {DashboardComponent} from "@pages/student/dashboard/dashboard.component";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]
