import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextComponent } from '../../components/inputs/input-text/input-text.component';
import { ClearButtonComponent } from '../../components/buttons/clear-button/clear-button.component';
import { InputCheckboxComponent } from '../../components/inputs/input-checkbox/input-checkbox.component';
import { SubmitButtonComponent } from '../../components/buttons/submit-button/submit-button.component';
import { CalculatorService } from '../../services/calculator.service';
import { Mortgage } from '../../models/mortgage.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextComponent,
    InputCheckboxComponent,
    ClearButtonComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {

  private service = inject(CalculatorService);

  private fb = inject(NonNullableFormBuilder);

  calculatorGroup!: FormGroup;

  constructor() {
    this.calculatorGroup = this.fb.group({
      amount: new FormControl('', [Validators.required]),
      term: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  clear(): void {
    this.calculatorGroup.reset();
    this.service.clear();
  }

  calculate(): void {

    if(this.calculatorGroup.invalid) {
      Object.keys(this.calculatorGroup.controls).forEach(control => {
        this.calculatorGroup.get(control)?.markAsDirty();
      });
    } else {
      this.service.calculate(this.calculatorGroup.getRawValue());
    }




  }
}
