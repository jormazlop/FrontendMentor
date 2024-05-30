import { Component, inject } from '@angular/core';
import { ModeService } from '../../services/mode.service';
import { ModeIconDirective } from '../../directives/mode-icon.directive';
import { ModePipe } from '../../pipes/mode.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModeIconDirective, ModePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private modeService = inject(ModeService);
  protected mode$ = this.modeService.mode$;

  onClickMode(): void {
    this.modeService.changeMode();
  }
}
