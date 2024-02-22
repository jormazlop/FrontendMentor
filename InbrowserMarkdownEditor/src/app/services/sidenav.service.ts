import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav = signal(false);
  readonly sidenav$ = this.sidenav.asReadonly();

  clickSidenav(): void {
    this.sidenav.update(value => !value);
  }

}
