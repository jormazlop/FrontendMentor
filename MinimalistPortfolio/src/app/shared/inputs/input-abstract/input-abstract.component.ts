import { Component, inject, input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: '',
  standalone: true,
  template: ''
})
export class InputAbstractComponent implements ControlValueAccessor, OnInit {

  innerControl = new FormControl();

  id = Date.now();

  label = input.required<string>();

  placeholder = input.required<string>();

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
