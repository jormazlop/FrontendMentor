import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LogoSmall } from './logo-small/logo-small';
import { LogoLarge } from './logo-large/logo-large';

@Component({
  selector: 'logo',
  imports: [LogoSmall, LogoLarge],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {

  private readonly breakpoint = inject(BreakpointObserver);
  private readonly _matched = toSignal(this.breakpoint.observe('(max-width: 700px)')) as Signal<BreakpointState>;
  isResponsive = computed(() => !!this._matched().matches);
}
