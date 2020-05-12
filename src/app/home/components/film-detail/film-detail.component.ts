import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Film } from 'src/app/core/models/film.model';

import { HomeService } from '../../home.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
})
export class FilmDetailComponent implements OnInit {
  film: Film;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.film$
      .pipe(filter(Boolean))
      .subscribe((film: Film) => (this.film = film));
  }
}
