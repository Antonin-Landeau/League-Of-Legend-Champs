import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() setInputField: EventEmitter<string> = new EventEmitter<string>();
  @Output() setRole: EventEmitter<string> = new EventEmitter<string>();
  @Output() setDifficulty: EventEmitter<string> = new EventEmitter<string>();

  roles: string[] = [
    'Assassin',
    'Fighter',
    'Mage',
    'Marksman',
    'Support',
    'Tank',
  ];

  difficulties: string[] = ['1', '2', '3'];

  onInputChange(e: Event): void {
    const inputValue = (e.target as HTMLInputElement).value;
    this.setInputField.emit(inputValue);
  }

  handleRoleChange(role: string): void {
    this.setRole.emit(role);
  }
  handleDifficultyChange(difficulty: string): void {
    this.setDifficulty.emit(difficulty);
  }
}
