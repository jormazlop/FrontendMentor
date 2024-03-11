import { Component, inject } from '@angular/core';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-restart-modal',
  standalone: true,
  imports: [ModalButtonComponent],
  templateUrl: './restart-modal.component.html',
  styleUrl: './restart-modal.component.scss'
})
export class RestartModalComponent {
  private modalService = inject(NgbModal);
  private gameService = inject(GameService);

  onClickNo(): void {
    this.modalService.dismissAll();
  }

  onClickYes(): void {
    this.gameService.initBoxes();
    this.modalService.dismissAll();
  }
}
