import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataService } from './data.service';
import { Crew, Data, Destination, Technology } from '../models/space';

export const dataResolver: ResolveFn<Data | Destination[] | Crew[] | Technology[]> = (router, state) => {

  switch(state.url) {
    case '/destination':
      return inject(DataService).data$().destinations;
    case '/crew':
      return inject(DataService).data$().crew;
    case '/technology':
      return inject(DataService).data$().technology;
    default:
      return inject(DataService).data$();
  }
};
