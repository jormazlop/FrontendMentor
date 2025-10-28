import { Component, inject, model } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NgControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-abstract-input',
  template: '',
})
export class AbstractInput implements ControlValueAccessor {

  disabled = false;
  onChange = (value: any) => {};
  onTouched = () => {};

  protected ngControl = inject(NgControl);
  protected innerControl!: FormControl;

  constructor() {
    if (this.ngControl instanceof FormControlName) {
      this.ngControl.valueAccessor = this;
    } else {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.innerControl = this.ngControl?.control as FormControl;
  }

  writeValue(value: any): void {
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
