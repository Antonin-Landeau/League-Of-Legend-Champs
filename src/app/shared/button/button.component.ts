import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  handleClick(): void {
    this.onClick.emit();
  }
}
