import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from "@lib/components/logo/logo.component";
import {ModalComponent} from "@lib/components/modal/modal.component";
import {RouterModule} from "@angular/router";
import {BackdropComponent} from "@lib/components/backdrop/backdrop.component";
import {LayoutHorizontalComponent} from "@lib/components/layouts/layout-horizontal/layout-horizontal.component";
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FlowbiteModule} from "flowbite-angular";


@NgModule({
  declarations: [LogoComponent, ModalComponent, BackdropComponent, LayoutHorizontalComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlowbiteModule
  ],
  exports: [LogoComponent, ModalComponent, BackdropComponent, LayoutHorizontalComponent, SpinnerComponent],
})
export class LibModule {
}
