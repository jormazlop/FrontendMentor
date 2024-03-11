import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { WinnerPipe } from '../../pipes/winner.pipe';

@Component({
  selector: 'app-winner-modal',
  standalone: true,
  imports: [ModalButtonComponent, WinnerPipe],
  templateUrl: './winner-modal.component.html',
  styleUrl: './winner-modal.component.scss',
})
export class WinnerModalComponent implements OnInit {

  @Input() winner: 'x' | 'o' | 'ties' | null = null;

  private modalService = inject(NgbModal);
  private gameService = inject(GameService);
  private router = inject(Router);
  protected winnerName = signal('');


  ngOnInit(): void {
    if(this.winner === 'x') {
      this.winnerName.set(this.gameService.data$().results.bluePlayer);
    }
    if(this.winner === 'o') {
      this.winnerName.set(this.gameService.data$().results.yellowPlayer);
    }
  }

  onClickQuit(): void {
    this.gameService.initData();
    this.modalService.dismissAll();
    this.router.navigate(['./game-selection']);
  }

  onClickNextRound(): void {

    const results = this.gameService.data$().results;

    switch (this.winner) {
      case 'x':
        results.blueTotal++;
        break;
      case 'o':
        results.yellowTotal++;
        break;
      case 'ties':
        results.silverTotal++;
        break;
    }

    this.gameService.initBoxes();
    this.gameService.setResults(results);
    this.modalService.dismissAll();
  }
}
