import { Component, OnInit } from '@angular/core';

import { Film } from '../core/models/film.model';
import { AjaxService } from '../core/services/ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  films: Film[] = [];
  constructor(private ajaxService: AjaxService) {}

  ngOnInit() {}

  getText(text: string) {
    if (text) this.getFilms(text);
  }

  getFilms(text: string) {
    this.ajaxService
      .get(text)
      .subscribe((films: Film[]) => (this.films = films));
  }
}
