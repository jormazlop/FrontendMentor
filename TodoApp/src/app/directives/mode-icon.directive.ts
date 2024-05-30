import { Directive, OnDestroy, ViewContainerRef, effect, inject } from '@angular/core';
import { SunIconComponent } from '../components/sun-icon/sun-icon.component';
import { ModeService } from '../services/mode.service';
import { MoonIconComponent } from '../components/moon-icon/moon-icon.component';

@Directive({
  selector: '[modeIcon]',
  standalone: true
})
export class ModeIconDirective implements OnDestroy {

  private viewContainer = inject(ViewContainerRef);
  private mode$ = inject(ModeService).mode$;

  private effectvc = effect(() => {
    this.viewContainer.clear();
    this.viewContainer.createComponent(this.mode$() === 'light' ? SunIconComponent: MoonIconComponent);
  });

  ngOnDestroy(): void {
    this.effectvc.destroy();
  }

}
