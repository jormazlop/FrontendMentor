import { Component, inject } from '@angular/core';
import { Daily } from '@shared/components/daily/daily';
import { Detail } from '@shared/components/detail/detail';
import { Hourly } from '@shared/components/hourly/hourly';
import { Search } from '@shared/components/search/search';
import { Weather } from '@shared/services/weather';

@Component({
  selector: 'app-body',
  imports: [Search, Detail, Hourly, Daily],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  loadingDetail = inject(Weather).loadingDetail;
  noResultFound = inject(Weather).noResultFound;
}
