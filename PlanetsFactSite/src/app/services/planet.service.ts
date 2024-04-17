import { Injectable, signal } from '@angular/core';
import data from '../../assets/data.json';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private planets = signal<Planet[]>([...data]);
  readonly planets$ = this.planets.asReadonly();

  private sidenav = signal(false);
  readonly sidenav$ = this.sidenav.asReadonly();


  clickMenu(): void {
    this.sidenav.update(val => !val);
  }

}
