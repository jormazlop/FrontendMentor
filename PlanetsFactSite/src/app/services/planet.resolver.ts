import { inject, input } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PlanetService } from './planet.service';
import { Planet } from '../models/planet';

export const planetResolver: ResolveFn<Planet | undefined> = (route) => {
  const id = route.params["id"];

  const planets$ = inject(PlanetService).planets$;

  return planets$().at(id);
};
