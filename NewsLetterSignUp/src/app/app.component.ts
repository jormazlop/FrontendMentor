import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MainModalComponent } from './main-modal/main-modal.component';
import { DismissModalComponent } from './dismiss-modal/dismiss-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NewsLetterSignUp';

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {

    this.openModal('dismiss');

  }

  openModal(modal: string): void {

    const config: NgbModalOptions = {
      backdrop: 'static'
    }

    let modalRef;

    if (modal === 'main') {
      modalRef = this.modalService.open(DismissModalComponent, config);
    } else {
      modalRef = this.modalService.open(MainModalComponent, config);
    }

    modalRef.closed.subscribe((modal) => {
        this.openModal(modal);
    });
  }

}
