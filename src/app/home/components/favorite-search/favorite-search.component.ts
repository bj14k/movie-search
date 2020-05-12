import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IStorage } from 'src/app/core/models/storage.model';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-favorite-search',
  templateUrl: './favorite-search.component.html',
  styleUrls: ['./favorite-search.component.scss'],
})
export class FavoriteSearchComponent implements OnInit {
  favorites: IStorage;
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService
      .getStorage()
      .pipe(tap(console.log))
      .subscribe((storage) => (this.favorites = storage));
  }

  getLength() {
    return this.favorites ? Object.keys(this.favorites).length : 0;
  }

  getKeys() {
    return Object.keys(this.favorites);
  }
}
