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
  input,
  viewChild,
  viewChildren,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconChevronDown } from '@shared/icons/icon-chevron-down/icon-chevron-down';
import { IconCheck } from '@shared/icons/icon-check/icon-check';
import { CategoryModel } from 'model/flashcard.model';
@Component({
  selector: 'button-categories',
  templateUrl: './button-categories.html',
  styleUrl: './button-categories.scss',
  imports: [
    Combobox,
    ComboboxInput,
    ComboboxPopup,
    ComboboxPopupContainer,
    Listbox,
    Option,
    OverlayModule,
    IconChevronDown,
    IconCheck
  ],
})
export class ButtonCategories {
  listbox = viewChild<Listbox<string>>(Listbox);
  options = viewChildren<Option<string>>(Option);
  combobox = viewChild<Combobox<string>>(Combobox);
  displayValue = computed(() => {
    const values = this.listbox()?.values() || [];
    if (values.length === 0) {
      return 'All Categories';
    }
    if (values.length === 1) {
      return values[0];
    }
    return `${values[0]} + ${values.length - 1} more`;
  });


  labels = input<CategoryModel[]>([]);
  constructor() {
    afterRenderEffect(() => {
      const option = this.options().find((opt) => opt.active());
      setTimeout(() => option?.element.scrollIntoView({ block: 'nearest' }), 50);
    });
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }
}
