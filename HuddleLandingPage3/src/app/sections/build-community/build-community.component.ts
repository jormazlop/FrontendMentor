import { Component, inject } from '@angular/core';
import { CommunityButtonComponent } from '../../components/community-button/community-button.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-build-community',
  standalone: true,
  imports: [CommunityButtonComponent, NgbModule],
  templateUrl: './build-community.component.html',
  styleUrl: './build-community.component.scss'
})
export class BuildCommunityComponent {

  modalService = inject(NgbModal);

  onClickButton() {
    this.modalService.open(ErrorDialogComponent);
  }
}
