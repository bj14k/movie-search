import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IStorage } from '../models/storage.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage$: BehaviorSubject<IStorage> = new BehaviorSubject<IStorage>(
    {}
  );

  constructor() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    this.storage$.next(movies ? movies : {});
  }

  getStorage() {
    return this.storage$.asObservable();
  }

  setMovie(text) {
    const storage = this.storage$.value ? this.storage$.value : {};
    if (!storage[text]) storage[text] = 0;
    storage[text]++;
    this.storage$.next(storage);

    localStorage.setItem('movies', JSON.stringify(storage));
  }
}
