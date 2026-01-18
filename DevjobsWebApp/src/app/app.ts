import { Component, effect, inject, input, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from '@layout/footer/footer';
import { Header } from '@layout/header/header';
import { JobService } from '@shared/services/job.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, RouterOutlet, Footer]
})
export class App {
  protected readonly title = signal('DevjobsWebApp');
  private readonly router = inject(Router);
  private readonly service = inject(JobService);

  footer = signal(false);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const route = this.router.routerState.root.firstChild;
      this.footer.set(route?.snapshot.data['footer'] === true);
    });
  }
}
