import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessibilityPage} from "@pages/settings/accessibility/accessibility.page";
import {AccountPage} from "@pages/settings/account/account.page";
import {AppearancePage} from "@pages/settings/appearance/appearance.page";

const routes: Routes = [{
  path: '',
  redirectTo: 'account',
  pathMatch: 'full'
},
  {
    path: 'accessibility',
    title: 'Accessibility settings',
    component: AccessibilityPage,
  },
  {
    path: 'account',
    title: 'Account settings',
    component: AccountPage,
  },
  {
    path: 'appearance',
    title: 'Appearance settings',
    component: AppearancePage,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
