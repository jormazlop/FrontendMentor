import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly _name = signal('Lisa Maria');
  name = this._name.asReadonly();

  private readonly _url = signal('/images/avatar-lisa.jpg');
  url = this._url.asReadonly();


  setName(name: string): void {
    this._name.set(name);
  }

  setUrl(url: string): void {
    this._url.set(url);
  }
}
