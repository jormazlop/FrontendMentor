import { Component, input, linkedSignal, signal } from '@angular/core';
import { Url } from '../../../models/url';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-shorten-item',
  imports: [ButtonComponent],
  templateUrl: './shorten-item.component.html',
  styleUrl: './shorten-item.component.scss'
})
export class ShortenItemComponent {

  url = input.required<Url>();

  private onCopy = signal(false);

  text = linkedSignal(() => this.onCopy() ? 'Copied!' : 'Copy');

  type = linkedSignal(() => this.text() === 'Copy' ? 'tertiary': 'tertiary-2');

  onClickCopy(): void {
    this.onCopy.set(true);
    navigator.clipboard.writeText(this.url().short);
  }

}
