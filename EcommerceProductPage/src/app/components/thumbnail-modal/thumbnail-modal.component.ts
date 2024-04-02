import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-thumbnail-modal',
  standalone: true,
  imports: [],
  templateUrl: './thumbnail-modal.component.html',
  styleUrl: './thumbnail-modal.component.scss'
})
export class ThumbnailModalComponent {
  thumbnails = [1, 2, 3, 4];
  thumbnail$ = signal(1);

  @HostListener('document:keydown.arrowleft')
  previousThumbnail(): void {
    this.thumbnail$.update(val => val > 1 ? --val : 4);
  }

  @HostListener('document:keydown.arrowright')
  nextThumbnail(): void {
    this.thumbnail$.update(val => val < 4 ? ++val : 1);
  }

  clickThumbnail(product: number): void {
    this.thumbnail$.set(product);
  }

}
