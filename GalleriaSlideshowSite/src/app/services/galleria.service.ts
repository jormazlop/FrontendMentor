import { Injectable, signal } from '@angular/core';
import data from '../../assets/data.json';
import { Painting } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleriaService {

  private paintings = signal<Painting[]>([...data]);
  readonly paintings$ = this.paintings.asReadonly();

}
