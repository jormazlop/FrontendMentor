import { Component, ElementRef, Signal, inject, input, viewChild } from '@angular/core';
import { Painting } from '../../models/gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-detail-image',
  standalone: true,
  imports: [],
  templateUrl: './detail-image.component.html',
  styleUrl: './detail-image.component.scss'
})
export class DetailImageComponent {

  private modalService = inject(NgbModal);
  private slideService = inject(SlideService);
  painting = input.required<Painting>();
  private modal: Signal<ElementRef | undefined> = viewChild('modal');

  private progress$ = this.slideService.progress$;

  onClickViewImage(): void {
    this.slideService.stopSlide();
    this.modalService.open(this.modal(), { centered: true, keyboard: false, backdrop: 'static' });
  }

  onClickCloseModal(): void {

    if(this.progress$()) {
      this.slideService.startSlide();
    }
    this.modalService.dismissAll();
  }
}
