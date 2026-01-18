import { Component, input } from '@angular/core';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { Icon } from '@shared/icon/icon';
import { JobModel } from '@shared/models/job.model';

@Component({
  selector: 'app-detail-header',
  imports: [Icon, ButtonSecondary],
  templateUrl: './detail-header.html',
  styleUrl: './detail-header.scss',
})
export class DetailHeader {
  job = input.required<JobModel>();
}
