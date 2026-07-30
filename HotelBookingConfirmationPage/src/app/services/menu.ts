import { Service, signal } from '@angular/core';

@Service()
export class MenuService {
  private readonly _open = signal(false);
  open = this._open.asReadonly();


  changeMenu(): void {
    this._open.update(open => !open);
  }

}
