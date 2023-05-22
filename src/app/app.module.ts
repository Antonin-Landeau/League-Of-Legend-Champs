import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChampionsPageComponent } from './pages/champions-page/champions-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/champions-page/title/title.component';
import { ChampionListComponent } from './components/champions-page/champion-list/champion-list.component';
import { ChampionCardComponent } from './components/champions-page/champion-card/champion-card.component';
import { FiltersComponent } from './components/champions-page/filters/filters.component';
import { SelectDropdownComponent } from './shared/select-dropdown/select-dropdown.component';
import { DifficultyIconComponent } from './shared/difficulty-icon/difficulty-icon.component';
import { ChampionPageComponent } from './pages/champion-page/champion-page.component';
import { RoleIconComponent } from './shared/role-icon/role-icon.component';
import { RoleDifficultySectionComponent } from './components/champion-page/role-difficulty-section/role-difficulty-section.component';
import { ButtonComponent } from './shared/button/button.component';
import { HomePageTitleComponent } from './components/home-page/home-page-title/home-page-title.component';
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomePageComponent,
    ChampionsPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    TitleComponent,
    ChampionListComponent,
    ChampionCardComponent,
    FiltersComponent,
    SelectDropdownComponent,
    DifficultyIconComponent,
    ChampionPageComponent,
    RoleIconComponent,
    RoleDifficultySectionComponent,
    ButtonComponent,
    HomePageTitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
