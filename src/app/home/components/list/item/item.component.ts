import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/core/models/film.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() film: Film;

  constructor(private homeService: HomeService) {}

  ngOnInit() {}

  setFilm(film: Film) {
    this.homeService.setFilm(film);
  }
}
