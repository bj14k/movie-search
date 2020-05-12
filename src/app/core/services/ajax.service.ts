import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IBackendResponse } from '../models/be-response.model';
import { Film, FilmAdapter } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class AjaxService {
  url = (title: string) =>
    // tslint:disable-next-line: semicolon
    `${environment.API_URL}${environment.API_KEY}&s=${title}`;

  constructor(private http: HttpClient, private filmAdapter: FilmAdapter) {}

  get(title: string): Observable<Film[]> {
    return this.http.get(this.url(title)).pipe(
      filter((res: IBackendResponse) => res.Response === 'True'),
      map((res: IBackendResponse) => res.Search.map(this.filmAdapter.adapt))
    );
  }
}
