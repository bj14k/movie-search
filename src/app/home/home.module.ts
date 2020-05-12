import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FavoriteSearchComponent } from './components/favorite-search/favorite-search.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { ListComponent } from './components/list/list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemComponent } from './components/list/item/item.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    ListComponent,
    FilmDetailComponent,
    FavoriteSearchComponent,
    ItemComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
