import {Routes} from "@angular/router";
import {DashboardComponent} from "@pages/staff/dashboard/dashboard.component";
import {DocumentDetailComponent} from "@pages/staff/document-detail/document-detail.component";
import {DocumentsComponent} from "@pages/staff/documents/documents.component";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'documents/:id',
    component: DocumentDetailComponent
  }
]
