import { Component, Input } from '@angular/core';

import { HomeService } from '../../home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() films: any[];

  constructor(public homeService: HomeService) {}
}
