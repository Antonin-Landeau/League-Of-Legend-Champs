import { Component, Input } from '@angular/core';
import { Champion } from 'src/app/types/champions';

import { trigger, transition, style, animate } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1 })),
]);
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('1s ease-in', style({ opacity: 0 })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css'],
  animations: [fadeIn, fadeOut],
})
export class ChampionCardComponent {
  @Input() champion?: Champion = undefined;
}
