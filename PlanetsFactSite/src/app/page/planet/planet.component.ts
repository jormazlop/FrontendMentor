import { Component, computed, inject, input, signal } from '@angular/core';
import { PlanetImageComponent } from '../../components/planet-image/planet-image.component';
import { PlanetDescriptionComponent } from '../../components/planet-description/planet-description.component';
import { Planet } from '../../models/planet';
import { PlanetDataComponent } from '../../components/planet-data/planet-data.component';
import { PlanetService } from '../../services/planet.service';
import { Router, RouterModule } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [PlanetImageComponent, PlanetDescriptionComponent, PlanetDataComponent, RouterModule, NgStyle],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export default class PlanetComponent {

  private planetService = inject(PlanetService);

  sidenav$ = this.planetService.sidenav$;

  planet = input.required<Planet>();

  images = computed(() => this.planet().images);

  option = signal(1);

  borderColor = computed(() => {

    switch(this.planet().name) {
      case 'Mercury':
        return '#419EBB';
      case 'Venus':
        return '#EDA249';
      case 'Earth':
        return '#6D2ED5';
      case 'Mars':
        return '#D14C32';
      case 'Jupiter':
        return '#D83A34';
      case 'Saturn':
        return '#CD5120';
      case 'Uranus':
        return '#1EC1A2';
      case 'Neptune':
        return '#2D68F0';
      default:
        return '#FFFFFF';
    }
  });

  private planets$ = inject(PlanetService).planets$;
  menu$ = computed(() => this.planets$().map(p => {
    return {name: p.name, image: p.images.planet}
  }));

  private router = inject(Router);

  onClickOption(option: number): void {
    this.option.set(option);
  }

  onClickPlanet(index: number): void {
    this.planetService.clickMenu();
    this.router.navigate(['/detail', index]);
  }

}
