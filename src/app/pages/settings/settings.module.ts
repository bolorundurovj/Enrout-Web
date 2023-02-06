import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import {AccessibilityPage} from "@pages/settings/accessibility/accessibility.page";
import {AccountPage} from "@pages/settings/account/account.page";
import {AppearancePage} from "@pages/settings/appearance/appearance.page";


@NgModule({
  declarations: [AccessibilityPage, AccountPage, AppearancePage],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
