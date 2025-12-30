import { TitleCasePipe } from '@angular/common';
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
  computed,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconDownArrow } from '@shared/icons/icon-down-arrow/icon-down-arrow';

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
    IconDownArrow
  ],
  templateUrl: './button-select.html',
  styleUrl: './button-select.scss',
})
export class ButtonSelect {
  active = input<string>();
  label = input<string>('');
  options = input.required<string[]>();
  onChangeOption = output<string>();

  /** The combobox listbox popup. */
  listbox = viewChild<Listbox<string>>(Listbox);
  /** A reference to the ng aria combobox. */
  combobox = viewChild<Combobox<string>>(Combobox);
  /** The icon that is displayed in the combobox. */

  constructor() {
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }

  onClickOption(option: string): void {
    this.onChangeOption.emit(option);
  }
}
