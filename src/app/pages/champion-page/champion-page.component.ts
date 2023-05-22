import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionsService } from 'src/app/service/champions.service';
import { Champion } from 'src/app/types/champions';

@Component({
  selector: 'app-champion-page',
  templateUrl: './champion-page.component.html',
  styleUrls: ['./champion-page.component.css'],
})
export class ChampionPageComponent implements OnInit {
  champion!: any;
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(
    private championsService: ChampionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchChampion(this.route.snapshot.params['id']);
  }

  fetchChampion(championId: string) {
    console.log(championId);
    this.championsService.getChampion(championId).subscribe(
      (response) => {
        console.log(Object.values(response.data)[0]);
        this.champion = Object.values(response.data)[0];
      },
      (error) => {
        if (error) {
          this.isLoading = false;
          this.isError = true;
        }
      }
    );
  }

  goBack() {
    console.log("first");
    this.router.navigate(['/champions']);
  }
}
