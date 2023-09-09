import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveMenuService {

  menuResponsiveOpen = new Subject<boolean>();

  constructor() {
    this.menuResponsiveOpen.next(false);
  }

  setMenuResponsiveOpen(value: boolean): void {
    this.menuResponsiveOpen.next(value);
  }

  getMenuResponsiveOpen(): Observable<boolean> {
    return this.menuResponsiveOpen.asObservable();
  }
}

