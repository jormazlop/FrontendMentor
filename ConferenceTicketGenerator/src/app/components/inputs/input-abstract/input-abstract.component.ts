import { Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NgControl } from '@angular/forms';

@Component({
  template: ''
})
export class InputAbstractComponent implements ControlValueAccessor {

  id = signal<string>("input-" + Math.random().toString(16).slice(2));

  label = input.required<string>();

  private onChange = (value: string) => {};
  private onTouched = () => {};

  protected innerControl!: FormControl;
  private ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.innerControl = this.ngControl?.control as FormControl;
  }

  writeValue(obj: any): void {
    this.onChange(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
     // Implement if needed
  }

}
