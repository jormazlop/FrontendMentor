import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent implements ControlValueAccessor {
  ngControl = inject(NgControl, { optional: true, self: true });

  @Output() search: EventEmitter<void> = new EventEmitter();

  innerValue = '';

  onChange = (value: string) => {};

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  //ControlValueAccessor interface
  writeValue(value: string) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {}

  setDisabledState?(isDisabled: boolean) {}

  changeInput(): void {
    this.onChange(this.innerValue);
  }

  @HostListener('document:keydown.enter')
  onKeydownEnter(): void {
    if (this.ngControl?.valid) {
      this.onClickSearch();
    }
  }

  onClickSearch(): void {
    this.search.emit();
  }
}
