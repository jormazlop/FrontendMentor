import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Goal } from '@shared/model/model';

@Component({
  selector: 'app-detail-history',
  imports: [DatePipe],
  templateUrl: './detail-history.html',
  styleUrl: './detail-history.scss',
})
export class DetailHistory {
  goal = input.required<Goal>();
}
