import {Routes} from "@angular/router";
import {DashboardComponent} from "@pages/staff/dashboard/dashboard.component";

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
