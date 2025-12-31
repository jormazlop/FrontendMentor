import { AsyncPipe, TitleCasePipe } from '@angular/common';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopup,
  ComboboxPopupContainer,
} from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import {
  afterRenderEffect,
  Component,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconDownArrow } from '@shared/icons/icon-down-arrow/icon-down-arrow';
import { ConfigPipe } from '@shared/pipes/config-pipe';
import { ConfigService } from '@shared/services/config';

@Component({
  selector: 'button-select',
  imports: [
    TitleCasePipe,
    Combobox,
    ComboboxInput,
    ComboboxPopup,
    ComboboxPopupContainer,
    Listbox,
    Option,
    OverlayModule,
    IconDownArrow,
    ConfigPipe,
    AsyncPipe,
  ],
  templateUrl: './button-select.html',
  styleUrl: './button-select.scss',
})
export class ButtonSelect {
  sound = inject(ConfigService).soundSelected;

  active = input<string>();
  label = input<string>('');
  options = input.required<string[]>();
  onChangeOption = output<string>();
  listbox = viewChild<Listbox<string>>(Listbox);
  combobox = viewChild<Combobox<string>>(Combobox);

  constructor() {
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }

  onClickOption(option: string): void {
    this.onChangeOption.emit(option);
    if (this.sound() === 'off') return;
    let audio = new Audio();
    audio.src = '../../../audio/select.wav';
    audio.load();
    audio.play();
  }
}
