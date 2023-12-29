import { Component, inject } from '@angular/core';
import { CommunityButtonComponent } from '../../components/community-button/community-button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ready',
  standalone: true,
  imports: [CommunityButtonComponent],
  templateUrl: './ready.component.html',
  styleUrl: './ready.component.scss'
})
export class ReadyComponent {
  modalService = inject(NgbModal);

  onClickButton() {
    this.modalService.open(ErrorDialogComponent);
  }
}
