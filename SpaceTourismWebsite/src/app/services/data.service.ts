import { Injectable, signal } from '@angular/core';
import data from '../../assets/data.json';
import { Data } from '../models/space';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = signal<Data>({...data});
  readonly data$ = this.data.asReadonly();
}
