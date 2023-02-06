import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from "@pages/home/home.page";

const routes: Routes = [
  {
    path: '',
    title: 'Enrout Home',
    component: HomePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
