import { Injectable } from '@angular/core';

import { Adapter } from '../adapters/adapter';

export class Film {
  constructor(
    public Title: string,
    public Year: string,
    public Director?: string,
    public Plot?: string,
    public Poster?: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class FilmAdapter implements Adapter<Film> {
  adapt(item: any): Film {
    return new Film(
      item.Title,
      item.Year,
      item.Director,
      item.Plot,
      item.Poster && item.Poster !== 'N/A' ? item.Poster : null
    );
  }
}
