import { Component, inject } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { PickMarkComponent } from '../../components/pick-mark/pick-mark.component';
import { NewGameButtonComponent } from '../../components/new-game-button/new-game-button.component';
import { GameResults, Oponent } from '../../models/game';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-selection',
  standalone: true,
  imports: [LogoComponent, PickMarkComponent, NewGameButtonComponent],
  templateUrl: './game-selection.component.html',
  styleUrl: './game-selection.component.scss',
})
export default class GameSelectionComponent {
  private router = inject(Router);

  private gameService = inject(GameService);

  constructor() {
    this.gameService.initData();
  }

  newGame(oponent: Oponent): void {

    this.gameService.initData();

    let results: GameResults;

    if (oponent === 'CPU') {
      if (this.gameService.playerMark$() === 'x') {
        results = {
          bluePlayer: 'YOU',
          blueTotal: 0,
          silverTotal: 0,
          yellowPlayer: 'CPU',
          yellowTotal: 0,
        };
      } else {
        results = {
          bluePlayer: 'CPU',
          blueTotal: 0,
          silverTotal: 0,
          yellowPlayer: 'YOU',
          yellowTotal: 0,
        };
      }
    } else {
      if (this.gameService.playerMark$() === 'x') {
        results = {
          bluePlayer: 'P1',
          blueTotal: 0,
          silverTotal: 0,
          yellowPlayer: 'P2',
          yellowTotal: 0,
        };
      } else {
        results = {
          bluePlayer: 'P2',
          blueTotal: 0,
          silverTotal: 0,
          yellowPlayer: 'P1',
          yellowTotal: 0,
        };
      }
    }
    this.gameService.setResults(results);
    this.gameService.setTurn('x');
    this.router.navigate(['./game-board']);
  }
}
