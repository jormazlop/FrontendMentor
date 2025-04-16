import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Filter } from '@models/filter-enum';
import data from '../../../public/data/data.json';
import { Extension } from '@models/extension.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  localStorage = inject(StorageService);

  private _filter = signal<Filter>(Filter.ALL);
  filter = this._filter.asReadonly();

  private _data = signal<Extension[]>(data);

  data = computed(() => {
    switch(this._filter()) {
      case Filter.ALL:
        return this._data();
      case Filter.ACTIVE:
        return this._data().filter(d => d.isActive);
      case Filter.INACTIVE:
        return this._data().filter(d => !d.isActive);
    }
  });

  constructor() {

    const localData = this.localStorage.getLocalStorage();

    if (localData) this._data.set(localData);

    const storageEffect = effect(() => {
      this.localStorage.setLocalStorage(this._data());
    });
  }

  setFilter(value: Filter): void {
    this._filter.set(value);
  }

  removeExtension(name: string): void {
    this._data.update(data => {
      return data.filter(d => d.name !== name)
    });
  }

  swtichExtension(name: string): void {
    this._data.update(data => {

      return data.map(d => {
        if(d.name === name) {
          d.isActive = !d.isActive
        }

        return d;
      });
    });
  }


}
