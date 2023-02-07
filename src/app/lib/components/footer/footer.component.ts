import { ChangeDetectionStrategy, Component } from '@angular/core';
import { REPOSITORY_URL } from '@lib/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly repositoryURL = REPOSITORY_URL;
  readonly currentYear = new Date().getFullYear();
}
