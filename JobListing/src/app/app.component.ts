import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobService } from '@services/job.service';
import { JobComponent } from './components/job/job.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { TagDirective } from './directives/tag.directive';
import { Job } from './models/job.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobComponent, FiltreComponent, TagDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'JobListing';

  private service = inject(JobService);
  data = this.service.data;


  getTags(job: Job): string[] {
    return [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ];
  }
}
