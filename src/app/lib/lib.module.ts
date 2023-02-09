import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from "@lib/components/logo/logo.component";
import {ModalComponent} from "@lib/components/modal/modal.component";
import {RouterModule} from "@angular/router";
import {BackdropComponent} from "@lib/components/backdrop/backdrop.component";
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from "@lib/components/navbar/navbar.component";
import {LayoutHorizontalComponent} from "@lib/components/layouts/layout-horizontal/layout-horizontal.component";
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FlowbiteModule} from "flowbite-angular";


@NgModule({
  declarations: [NavbarComponent, FooterComponent, LogoComponent, ModalComponent, BackdropComponent, LayoutHorizontalComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlowbiteModule
  ],
  exports: [NavbarComponent, FooterComponent, LogoComponent, ModalComponent, BackdropComponent, LayoutHorizontalComponent, SpinnerComponent],
})
export class LibModule {
}
