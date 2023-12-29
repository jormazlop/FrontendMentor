import { Component, inject } from '@angular/core';
import { HeaderButtonComponent } from '../../components/header-button/header-button.component';
import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  modalService = inject(NgbModal);

  onClickButton() {
    this.modalService.open(ErrorDialogComponent);
  }

}
