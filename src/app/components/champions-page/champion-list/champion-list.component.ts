import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/app/types/champions';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css'],
})
export class ChampionListComponent implements OnInit {
  @Input() champions: Champion[] = [];
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  ngOnInit(): void {}
}
