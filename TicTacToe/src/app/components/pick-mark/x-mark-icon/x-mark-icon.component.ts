import { Component, computed, inject, input } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-x-mark-icon',
  standalone: true,
  imports: [],
  templateUrl: './x-mark-icon.component.html',
  styleUrl: './x-mark-icon.component.scss'
})
export class XMarkIconComponent {
  private mark = inject(GameService).playerMark$;
  active = computed(() => this.mark() === 'x');
}
