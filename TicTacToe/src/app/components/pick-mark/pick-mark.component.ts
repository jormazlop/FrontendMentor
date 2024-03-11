import { Component, inject } from '@angular/core';
import { OMarkIconComponent } from './o-mark-icon/o-mark-icon.component';
import { XMarkIconComponent } from './x-mark-icon/x-mark-icon.component';
import { GameService } from '../../services/game.service';
import { Mark } from '../../models/game';

@Component({
  selector: 'app-pick-mark',
  standalone: true,
  imports: [OMarkIconComponent, XMarkIconComponent],
  templateUrl: './pick-mark.component.html',
  styleUrl: './pick-mark.component.scss'
})
export class PickMarkComponent {

  private gameService = inject(GameService);
  mark$ = this.gameService.playerMark$;

  protected onClickMark(mark: Mark): void {
    this.gameService.setPlayerMark(mark);
  }
}
