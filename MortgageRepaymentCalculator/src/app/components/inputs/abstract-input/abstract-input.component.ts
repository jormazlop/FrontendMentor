import { Component, OnInit, inject, input, signal } from "@angular/core";
import { ControlValueAccessor, FormControl, FormControlName, NgControl } from "@angular/forms";
import { v7 as uuid } from 'uuid';

@Component({
  template: ""
})
export class AbstractInputComponent implements ControlValueAccessor, OnInit {

  private onChange = (value: string) => {};
  private onTouched = () => {};

  protected innerControl!: FormControl;
  protected id = signal(uuid());
  title = input.required<string>();

  private ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if(this.ngControl instanceof FormControlName) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.innerControl = this.ngControl?.control as FormControl;
  }

  writeValue(obj: any): void {
     // Implement if needed
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
