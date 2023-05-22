import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-icon',
  templateUrl: './role-icon.component.html',
  styleUrls: ['./role-icon.component.css'],
})
export class RoleIconComponent {
  @Input() role!: string;
}
