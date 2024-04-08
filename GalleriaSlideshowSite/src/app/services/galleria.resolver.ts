import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GalleriaService } from './galleria.service';
import { Painting } from '../models/gallery';

export const galleriaResolver: ResolveFn<Painting> = (route, state) => {

  const index = +route.paramMap.get('id')!;

  const paintings$ = inject(GalleriaService).paintings$;

  return paintings$().at(index)!;
};
