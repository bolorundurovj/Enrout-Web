import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-horizontal',
  templateUrl: './layout-horizontal.component.html',
  styleUrls: ['./layout-horizontal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHorizontalComponent {}
