import { Component, effect, inject } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { TurnLabelComponent } from '../../components/turn-label/turn-label.component';
import { RestartButtonComponent } from '../../components/restart-button/restart-button.component';
import { BoardCheckboxComponent } from '../../components/board-checkbox/board-checkbox.component';
import { ResultLabelComponent } from '../../components/result-label/result-label.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestartModalComponent } from '../../components/restart-modal/restart-modal.component';
import { GameService } from '../../services/game.service';
import { WinnerModalComponent } from '../../components/winner-modal/winner-modal.component';
import { ContinueModalComponent } from '../../continue-modal/continue-modal.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    LogoComponent,
    TurnLabelComponent,
    RestartButtonComponent,
    BoardCheckboxComponent,
    ResultLabelComponent,
    RestartModalComponent,
    WinnerModalComponent,
    ContinueModalComponent,
  ],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export default class GameBoardComponent {
  private modalService = inject(NgbModal);

  private gameService = inject(GameService);

  private turn$ = this.gameService.turn$;

  protected data$ = this.gameService.data$;

  protected loading$ = this.gameService.loading$;

  constructor() {
    if (this.data$().boxes.some((v) => v.value)) {
      this.modalService.open(ContinueModalComponent, {
        centered: true,
        keyboard: false,
        beforeDismiss: () => {
          if (this.data$().boxes.some((v) => v.value)) {
            return true;
          }
          return false;
        },
      });
    }

    effect(
      () => {
        let winner = this.checkWinner();

        if (winner) {
          const modalRef = this.modalService.open(WinnerModalComponent, {
            centered: true,
            keyboard: false,
            beforeDismiss: () => {
              if (this.data$().boxes.every((v) => !v.value)) {
                return true;
              }
              return false;
            },
          });
          modalRef.componentInstance.winner = winner;
        } else {
          if (
            this.turn$() === 'x' &&
            this.data$().results.bluePlayer === 'CPU'
          ) {
            this.cpuCheckBox();
          }

          if (
            this.turn$() === 'o' &&
            this.data$().results.yellowPlayer === 'CPU'
          ) {
            this.cpuCheckBox();
          }
        }
      },
      { allowSignalWrites: true }
    );
  }

  restartGame(): void {
    this.modalService.open(RestartModalComponent, { centered: true });
  }

  checkBox(id: number): void {
    if (!this.loading$()) {
      this.gameService.checkBox(id, this.turn$());
      this.gameService.changeTurn();
    }
  }

  cpuCheckBox(): void {
    this.gameService.changeLoading();

    setTimeout(() => {
      this.gameService.changeLoading();
      const freeBoxes = this.data$()
        .boxes.filter((b) => !b.value)
        .map((b) => b.id);

      const id = freeBoxes[Math.floor(Math.random() * freeBoxes.length)];
      this.checkBox(id);
    }, 1000);
  }

  checkWinner(): 'x' | 'o' | 'ties' | null {
    let winner: 'x' | 'o' | 'ties' | null = null;

    const boxes = this.data$().boxes;

    // Horizontals
    if (boxes.slice(0, 3).every((v) => v.value === 'x')) {
      winner = 'x';
    }

    if (boxes.slice(0, 3).every((v) => v.value === 'o')) {
      winner = 'o';
    }

    if (boxes.slice(3, 6).every((v) => v.value === 'x')) {
      winner = 'x';
    }

    if (boxes.slice(3, 6).every((v) => v.value === 'o')) {
      winner = 'o';
    }

    if (boxes.slice(6, 9).every((v) => v.value === 'x')) {
      winner = 'x';
    }

    if (boxes.slice(6, 9).every((v) => v.value === 'o')) {
      winner = 'o';
    }

    // Verticals
    if (
      boxes[0].value === 'x' &&
      boxes[3].value === 'x' &&
      boxes[6].value === 'x'
    ) {
      winner = 'x';
    }

    if (
      boxes[1].value === 'x' &&
      boxes[4].value === 'x' &&
      boxes[7].value === 'x'
    ) {
      winner = 'x';
    }

    if (
      boxes[2].value === 'x' &&
      boxes[5].value === 'x' &&
      boxes[8].value === 'x'
    ) {
      winner = 'x';
    }

    if (
      boxes[0].value === 'o' &&
      boxes[3].value === 'o' &&
      boxes[6].value === 'o'
    ) {
      winner = 'o';
    }

    if (
      boxes[1].value === 'o' &&
      boxes[4].value === 'o' &&
      boxes[7].value === 'o'
    ) {
      winner = 'o';
    }

    if (
      boxes[2].value === 'o' &&
      boxes[5].value === 'o' &&
      boxes[8].value === 'o'
    ) {
      winner = 'o';
    }

    // Diagonals
    if (
      boxes[0].value === 'x' &&
      boxes[4].value === 'x' &&
      boxes[8].value === 'x'
    ) {
      winner = 'x';
    }

    if (
      boxes[2].value === 'x' &&
      boxes[4].value === 'x' &&
      boxes[6].value === 'x'
    ) {
      winner = 'x';
    }

    if (
      boxes[0].value === 'o' &&
      boxes[4].value === 'o' &&
      boxes[8].value === 'o'
    ) {
      winner = 'o';
    }

    if (
      boxes[2].value === 'o' &&
      boxes[4].value === 'o' &&
      boxes[6].value === 'o'
    ) {
      winner = 'o';
    }

    if (!winner && !boxes.some((v) => !v.value)) {
      winner = 'ties';
    }

    return winner;
  }
}
