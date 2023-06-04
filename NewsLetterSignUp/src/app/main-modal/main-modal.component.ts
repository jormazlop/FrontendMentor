import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent {

  mail = '';
  incorrectMail = false;

  constructor(private activeModal: NgbActiveModal){}

  onClickSubscription(): void {

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(regex.test(this.mail)) {
      this.activeModal.close('main');
    } else {
      this.incorrectMail = true;
    }
  }
}
