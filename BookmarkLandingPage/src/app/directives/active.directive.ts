import { Directive, effect, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[active]'
})
export class ActiveDirective {

  active = input<boolean>(false);

  @HostBinding('style.border-bottom') border = '';

  borderEffect = effect(() => {
    this.border = this.active() ? '2px solid var(--red)' : '';
  });


}
