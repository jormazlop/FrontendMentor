import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-turn-label',
  standalone: true,
  imports: [],
  templateUrl: './turn-label.component.html',
  styleUrl: './turn-label.component.scss'
})
export class TurnLabelComponent {
  protected turn$ = inject(GameService).turn$;
}
