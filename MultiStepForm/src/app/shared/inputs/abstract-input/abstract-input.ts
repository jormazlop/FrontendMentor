import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({ template: '' })
export class AbstractInput implements ControlValueAccessor {

  private ngControl = inject(NgControl, { self: true, optional: true });
  innerControl = new FormControl<string | string[]>('');

  label = input('Label');
  placeholder = input('Placeholder');

  id = 'input-' + Math.random().toString(16).slice(2);

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.innerControl = this.ngControl?.control as FormControl;
  }

  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}
}
