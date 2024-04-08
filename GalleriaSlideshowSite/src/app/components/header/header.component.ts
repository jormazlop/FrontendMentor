import { Component, HostListener, inject, signal } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private slideService = inject(SlideService);
  private router = inject(Router);
  private modalService = inject(NgbModal);

  started = this.slideService.started$;

  @HostListener('window:popstate')
  onPopState() {
    this.slideService.stopSlide();
    this.modalService.dismissAll();
  }

  onClickSlide(): void {

    if(!this.started()) {
      if(!window.location.pathname.includes('detail')) {
        this.router.navigate(['./detail/0'])
      }
      this.slideService.startSlide();
    } else {
      this.slideService.stopSlide();
    }
  }
}
