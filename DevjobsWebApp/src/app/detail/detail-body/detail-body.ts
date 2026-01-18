import { Component, input } from '@angular/core';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { JobModel } from '@shared/models/job.model';

@Component({
  selector: 'app-detail-body',
  imports: [ButtonPrimary],
  templateUrl: './detail-body.html',
  styleUrl: './detail-body.scss',
})
export class DetailBody {
  job = input.required<JobModel>();
}
