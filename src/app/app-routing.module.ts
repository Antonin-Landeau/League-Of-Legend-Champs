import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChampionsPageComponent } from './pages/champions-page/champions-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ChampionPageComponent } from './pages/champion-page/champion-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'champions',
    component: ChampionsPageComponent,
  },
  {
    path: 'champion/:id',
    component: ChampionPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
