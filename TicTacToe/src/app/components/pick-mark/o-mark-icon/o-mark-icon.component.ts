import { Component, computed, inject, input } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-o-mark-icon',
  standalone: true,
  imports: [],
  templateUrl: './o-mark-icon.component.html',
  styleUrl: './o-mark-icon.component.scss'
})
export class OMarkIconComponent {

  private mark = inject(GameService).playerMark$;
  active = computed(() => this.mark() === 'o');

}
