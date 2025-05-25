import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DataService } from '@services/data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'PersonalBlog';

  private route = inject(Router);
  private data = inject(DataService);

  actualSection = signal(this.route.url.substring(1));

  constructor() {
    this.route.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.actualSection.set(event.urlAfterRedirects.substring(1))
    });
  }

  goTo(route: Event): void {
    const event = route as CustomEvent;
    this.route.navigate([event.detail]);
  }
}
