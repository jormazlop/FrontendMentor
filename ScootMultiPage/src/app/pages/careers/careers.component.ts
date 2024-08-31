import { Component } from '@angular/core';
import { CareersHeaderComponent } from './careers-header/careers-header.component';
import { CareersJoinComponent } from './careers-join/careers-join.component';
import { CareersValuesComponent } from './careers-values/careers-values.component';
import { CareersOffersComponent } from './careers-offers/careers-offers.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CareersHeaderComponent,
    CareersJoinComponent,
    CareersValuesComponent,
    CareersOffersComponent
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export default class CareersComponent {}
