import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-difficulty-section',
  templateUrl: './role-difficulty-section.component.html',
  styleUrls: ['./role-difficulty-section.component.css'],
})
export class RoleDifficultySectionComponent {
  @Input() difficulty!: number;
  @Input() role!: string[];
}
