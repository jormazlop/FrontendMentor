import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  private preview = signal(false);

  readonly preview$ = this.preview.asReadonly();

  changePreview(): void {
    this.preview.update(value => !value);
  }
}
