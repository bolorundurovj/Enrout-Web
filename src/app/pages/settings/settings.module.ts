import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import {AccessibilityPage} from "@pages/settings/accessibility/accessibility.page";
import {AccountPage} from "@pages/settings/account/account.page";
import {AppearancePage} from "@pages/settings/appearance/appearance.page";
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AccessibilityPage, AccountPage, AppearancePage, SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    RouterModule
  ]
})
export class SettingsModule { }
