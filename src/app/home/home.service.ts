import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Film } from '../core/models/film.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  film$: BehaviorSubject<Film> = new BehaviorSubject<Film>(null);
  text$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() {}

  setText(text: string) {
    this.text$.next(text);
  }

  setFilm(film: Film) {
    this.film$.next(film);
  }
}
