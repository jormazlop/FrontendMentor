import { Component, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {

  private onChange = (value: string) => {};
  private onTouched = () => {};
  protected innerControl!: FormControl;
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
