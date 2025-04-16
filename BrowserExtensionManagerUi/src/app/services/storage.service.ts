import { Injectable } from '@angular/core';
import { Extension } from '@models/extension.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private EXTENSION_KEY = "extension_list";

  setLocalStorage(data: Extension[]): void {
    localStorage.setItem(this.EXTENSION_KEY, JSON.stringify(data));
  }

  getLocalStorage(): Extension[] | null {
    const data = localStorage.getItem(this.EXTENSION_KEY);
    return data ? JSON.parse(data) : null;
  }
}
