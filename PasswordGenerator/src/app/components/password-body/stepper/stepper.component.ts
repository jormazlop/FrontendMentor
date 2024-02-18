import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component, inject } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [NgxSliderModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements ControlValueAccessor {

  value!: number;

  onChange = (value: number) => {};
  onTouched = () => {};

  ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  options: Options = {
    floor: 4,
    ceil: 16,
    hideLimitLabels: true,
    hidePointerLabels: true
  };

  onValueChange(value: number): void {
    this.onChange(value);
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
