import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, flatMap, mergeMap, tap } from 'rxjs/operators';
import { StorageService } from 'src/app/core/services/storage.service';

import { HomeService } from '../../home.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() text: EventEmitter<string> = new EventEmitter<string>(null);
  searchText$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  textToSave: string;
  active: boolean;

  constructor(
    private homeService: HomeService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.searchText$
      .pipe(
        debounceTime(400),
        tap(() => (this.active = false)),
        filter(Boolean),
        tap((val: string) => {
          this.textToSave = val.toLowerCase();
          this.text.emit(val);
          this.homeService.setText(val);
        }),
        flatMap((val: string) =>
          this.storageService.getStorage().pipe(
            distinctUntilChanged(),
            tap(console.log),
            mergeMap((storage) => [[storage, val]])
          )
        )
      )
      .subscribe(([storage, text]) => {
        const exists = Object.keys(storage).find((el) => el === text);
        if (exists) {
          this.active = true;
          this.addToFav();
        }
      });
  }

  onKeyUp(value: string) {
    this.searchText$.next(value);
  }

  addToFav() {
    this.active = true;
    this.storageService.setMovie(this.textToSave);
  }
}
