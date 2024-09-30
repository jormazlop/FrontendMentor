import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Reservations1Component } from './reservations-1/reservations-1.component';
import { Reservations2Component } from './reservations-2/reservations-2.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ReservationsBookingComponent } from './reservations-booking/reservations-booking.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [Reservations1Component, Reservations2Component],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export default class ReservationsComponent {

  private modalService = inject(NgbModal);

  constructor() {

    const options: NgbModalOptions = {
      backdrop : 'static',
      centered: true,
      keyboard: false
    }

    this.modalService.open(ReservationsBookingComponent, options);
  }
}
