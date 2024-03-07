import { Component, ViewEncapsulation, inject } from '@angular/core';
import { DarkIconComponent } from './dark-icon/dark-icon.component';
import { LightIconComponent } from './light-icon/light-icon.component';
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-mode-button',
  standalone: true,
  imports: [DarkIconComponent, LightIconComponent],
  templateUrl: './mode-button.component.html',
  styleUrl: './mode-button.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ModeButtonComponent {

  modeService = inject(ModeService);
  mode$ = this.modeService.mode$;

  changeMode(): void {
    this.modeService.changeMode();
  }

}
