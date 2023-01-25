import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackdropComponent} from "@lib/components/backdrop/backdrop.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, BackdropComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() show!: boolean;
  @Input() title!: string;
}
