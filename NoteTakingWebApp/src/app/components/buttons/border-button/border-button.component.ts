import { Component, effect, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';
import { IconRefreshComponent } from '@icons/icon-refresh/icon-refresh.component';

@Component({
  selector: 'note-border-button',
  imports: [IconRefreshComponent],
  templateUrl: './border-button.component.html',
  styleUrl: './border-button.component.scss'
})
export class BorderButtonComponent {
  disabled = input<boolean>(false);

  private renderer = inject(Renderer2);

  private icon = viewChild('icon', {read: ElementRef});

  private iconEffect = effect(() => {
    const ref = this.icon()?.nativeElement.previousElementSibling;
    this.renderer.setStyle(ref, 'width', '2rem');
  });

}
