import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  onOpenMenu() {
    this.isMenuOpen = true;
  }

  onCloseMenu() {
    this.isMenuOpen = false;
  }
}
