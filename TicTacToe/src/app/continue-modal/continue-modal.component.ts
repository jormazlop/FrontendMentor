import { Component, inject } from '@angular/core';
import { ModalButtonComponent } from '../components/modal-button/modal-button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-continue-modal',
  standalone: true,
  imports: [ModalButtonComponent],
  templateUrl: './continue-modal.component.html',
  styleUrl: './continue-modal.component.scss'
})
export class ContinueModalComponent {

  private modalService = inject(NgbModal);
  private router = inject(Router);
  private gameService = inject(GameService);

  onClickContinue(): void {
    this.modalService.dismissAll();
  }

  onClickRestart(): void {
    this.modalService.dismissAll();
    this.router.navigate(['./game-selection']);
  }
}
