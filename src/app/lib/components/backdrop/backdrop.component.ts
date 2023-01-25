import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {
  @Input() show!: boolean;
  @Output() clicked = new EventEmitter();

  backDropClick() {
    this.clicked.emit();
  }
}
