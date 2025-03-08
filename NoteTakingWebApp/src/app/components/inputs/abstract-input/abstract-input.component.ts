import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NgModel } from '@angular/forms';

@Component({
  template: '',
})
export class AbstractInputComponent implements ControlValueAccessor {

  innerControl = new FormControl();

  id = input<number>(Date.now());

  placeholder = input<string>('Placeholder text');

  ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.innerControl = this.ngControl?.control as FormControl;
  }

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
