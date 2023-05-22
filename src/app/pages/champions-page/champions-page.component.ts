import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/app/service/champions.service';
import { Champion } from 'src/app/types/champions';
import { Filter } from 'src/app/types/filter';

@Component({
  selector: 'app-champions-page',
  templateUrl: './champions-page.component.html',
  styleUrls: ['./champions-page.component.css'],
})
export class ChampionsPageComponent implements OnInit {
  champions: Champion[] = [];
  filteredChampions: Champion[] = [];
  isLoading: boolean = false;
  isError: boolean = false;

  filter: Filter = {
    search: '',
    tag: '',
    difficulty: '',
  };

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchChampions();
  }

  fetchChampions() {
    this.championsService.getChampions().subscribe(
      (response) => {
        this.champions = Object.values(response.data);
        console.log(this.champions);
        this.filteredChampions = Object.values(response.data);
        this.isLoading = false;
      },
      (error) => {
        if (error) {
          this.isLoading = false;
          this.isError = true;
        }
      }
    );
  }

  handleSearchInput(search: string) {
    this.filter = { ...this.filter, search: search };
    this.filterChampions(this.filter);
  }

  handleRoleChange(role: string) {
    this.filter = { ...this.filter, tag: role };
    this.filterChampions(this.filter);
  }

  handleDifficulty(difficulty: string) {
    this.filter = { ...this.filter, difficulty: difficulty };
    this.filterChampions(this.filter);
  }

  filterChampions(filters: Filter) {

    //apply the search input filter
    let newChampArray = this.champions.filter((champion) =>
      champion.name?.toLowerCase().includes(filters.search.toLowerCase())
    );

    //apply the role input filter
    if (this.filter.tag.length > 0) {
      newChampArray = newChampArray.filter((champion) =>
        champion.tags?.includes(filters.tag)
      );
    }

    //apply the difficulty input filter

    if (this.filter.difficulty.length > 0) {
      switch (this.filter.difficulty) {
        case '1':
          newChampArray = newChampArray.filter(
            (champion) => champion.info.difficulty <= 4
          );
          break;
        case '2':
          newChampArray = newChampArray.filter(
            (champion) =>
              champion.info.difficulty > 4 && champion.info.difficulty <= 7
          );
          break;
        case '3':
          newChampArray = newChampArray.filter(
            (champion) => champion.info.difficulty > 7
          );
          break;
        default:
          break;
      }
    }

    console.log(newChampArray);

    this.filteredChampions = newChampArray;
  }
}
