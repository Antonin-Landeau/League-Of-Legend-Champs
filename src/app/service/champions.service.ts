import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  constructor(private http: HttpClient) {}

  getChampions(): Observable<any> {
    return this.http.get<any>(
      'http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json'
    );
  }
  getChampion(id: string): Observable<any> {
    return this.http.get<any>(
      'http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion/' +
        id +
        '.json'
    );
  }
}
