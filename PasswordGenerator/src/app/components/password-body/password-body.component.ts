import { Component, OnDestroy, inject } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { StrenghtComponent } from './strenght/strenght.component';
import { GenerateComponent } from './generate/generate.component';
import { ErrorPipe } from '../../pipes/error.pipe';
import { PasswordService } from '../../services/password.service';
import { Subscription } from 'rxjs';

export type PasswordGroup = Partial<{
  lengthControl: number | null;
  uppercaseControl: boolean | null;
  lowercaseControl: boolean | null;
  numbersControl: boolean | null;
  symbolsControl: boolean | null;
}>;

@Component({
  selector: 'app-password-body',
  standalone: true,
  imports: [
    StepperComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    StrenghtComponent,
    GenerateComponent,
    ErrorPipe
  ],
  templateUrl: './password-body.component.html',
  styleUrl: './password-body.component.scss',
})
export class PasswordBodyComponent implements OnDestroy {

  formGroupSubscription = new Subscription();

  formGroup = new FormGroup({
    lengthControl: new FormControl(10),
    uppercaseControl: new FormControl(true),
    lowercaseControl: new FormControl(true),
    numbersControl: new FormControl(false),
    symbolsControl: new FormControl(false),
  }, [this.passwordValidator]);

  passwordService = inject(PasswordService);

  constructor() {

    this.passwordService.calculateDifficulty(this.formGroup.value);
    this.passwordService.generatePassword(this.formGroup.value);

    this.formGroupSubscription = this.formGroup.valueChanges.subscribe((value: PasswordGroup) => {
      this.passwordService.calculateDifficulty(value);
    })
  }

  passwordValidator(formGroup: AbstractControl): ValidationErrors | null {
    return Object.values(formGroup.value).includes(true) ? null : { 'passwordError': 'At least one option must be checked!' };
  }

  onSubmit(): void {
    this.passwordService.generatePassword(this.formGroup.value);
  }

  ngOnDestroy(): void {
    this.formGroupSubscription.unsubscribe();
  }
}
