import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-difficulty-icon',
  templateUrl: './difficulty-icon.component.html',
  styleUrls: ['./difficulty-icon.component.css'],
})
export class DifficultyIconComponent {
  @Output() setValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() value!: string;

  updateValue(value: string) {
    this.setValue.emit(value);
  }
}
