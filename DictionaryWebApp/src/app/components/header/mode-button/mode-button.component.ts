import { Component, inject } from '@angular/core';
import { ModeService } from '../../../services/mode.service';
import { IconMoonComponent } from './icon-moon/icon-moon.component';

@Component({
  selector: 'app-mode-button',
  standalone: true,
  imports: [IconMoonComponent],
  templateUrl: './mode-button.component.html',
  styleUrl: './mode-button.component.scss'
})
export class ModeButtonComponent {

  modeService = inject(ModeService);

  mode = this.modeService.mode;

  onClickMode(): void {
    this.modeService.mode = !this.mode();
  }

}
