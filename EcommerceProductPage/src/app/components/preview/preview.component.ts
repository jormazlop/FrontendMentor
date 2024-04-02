import { Component, HostListener, inject, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThumbnailModalComponent } from '../thumbnail-modal/thumbnail-modal.component';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [ThumbnailModalComponent],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  products = [1, 2, 3, 4];
  preview = signal(1);

  private modalService = inject(NgbModal);

  @HostListener('document:keydown.arrowleft')
  previousThumbnail(): void {
    this.preview.update(val => val > 1 ? --val : 4);
  }

  @HostListener('document:keydown.arrowright')
  nextThumbnail(): void {
    this.preview.update(val => val < 4 ? ++val : 1);
  }

  clickThumbnail(product: number): void {
    this.preview.set(product);
  }

  openModal() {
		const modalRef = this.modalService.open(ThumbnailModalComponent);
	}
}
