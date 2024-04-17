import { Component, computed, inject, input, signal } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private planets$ = inject(PlanetService).planets$;
  menu$ = computed(() => this.planets$().map(p => p.name));

  private planetService = inject(PlanetService);

  sidenav$ = this.planetService.sidenav$;

  onClickMenu(): void {
    this.planetService.clickMenu();
  }

}
