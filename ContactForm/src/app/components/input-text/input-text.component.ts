import { Component, inject, input, model } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { InputErrorPipe } from '../../pipes/input-error.pipe';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [ReactiveFormsModule, InputErrorPipe],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements ControlValueAccessor {

  id = "input-" + Math.random().toString(16).slice(2);

  label = input.required<string>();

  protected value = model('');

  onChange = (value: string) => {};
  onTouched = () => {};

  ngControl = inject(NgControl, { optional: true, self: true });

  innerControl = new FormControl();

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.innerControl = this.ngControl?.control as FormControl;
  }

  writeValue(value: string): void {
    // Set the value of your custom control element
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    // Register the callback for value changes
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Register the callback for touch events
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Disable or enable your custom control
    if (isDisabled) {
      this.ngControl?.control?.disable();
    } else {
      this.ngControl?.control?.enable();
    }
  }
}
