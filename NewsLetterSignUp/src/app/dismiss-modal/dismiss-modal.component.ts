import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dismiss-modal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dismiss-modal.component.html',
  styleUrls: ['./dismiss-modal.component.scss']
})
export class DismissModalComponent {

  constructor(private activeModal: NgbActiveModal){}

  onClickDismissMesage(): void {
    this.activeModal.close('dismiss');
  }
}
