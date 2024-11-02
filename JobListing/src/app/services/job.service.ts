import { Injectable, signal } from '@angular/core';
import data from '@data/data.json';
import { Job } from '../models/job.model';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _data = signal<Job[]>(data);
  data = this._data.asReadonly();


  private _filtre = signal<string[]>([]);
  filtre = this._filtre.asReadonly();

  addFiltre(filtre: string): void {

    this._filtre.update(filtres => {

      if (!filtres.includes(filtre)) {
        filtres.push(filtre);
      }

      return [...filtres].sort();

    });

  }

  removeFiltre(filtre: string): void {

    this._filtre.update(filtres => {

      const indexAt = filtres.indexOf(filtre);

      if (indexAt > -1) {
        filtres.splice(indexAt, 1);
      }

      return [...filtres];

    });

  }

  clearFiltre(): void {
    this._filtre.set([]);
  }

}
