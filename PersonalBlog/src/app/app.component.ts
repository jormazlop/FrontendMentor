import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SectionService } from '@services/section.service';

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
  private section = inject(SectionService);

  actualSection = this.section.section;

  goTo(route: Event): void {
    const event = route as CustomEvent;
    this.route.navigate([event.detail]);
    this.section.setSection(event.detail);
  }
}
