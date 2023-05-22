import { Component, Input } from '@angular/core';
import { Champion } from 'src/app/types/champions';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css'],
})
export class ChampionCardComponent {
  @Input() champion?: Champion = undefined;
}
