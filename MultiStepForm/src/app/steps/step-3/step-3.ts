import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdditionalButton } from '@buttons/additional-button/additional-button';
import { PrimaryButton } from '@buttons/primary-button/primary-button';
import { CheckboxInput } from '@inputs/checkbox-input/checkbox-input';
import { Step } from '@services/step';

@Component({
  selector: 'app-step-3',
  imports: [
    ReactiveFormsModule,
    CheckboxInput,
    PrimaryButton,
    AdditionalButton,
  ],
  templateUrl: './step-3.html',
  styleUrl: './step-3.scss',
})
export default class Step3 {
  private route = inject(Router);

  step3 = new FormGroup({
    addons: new FormControl([]),
  });

  stepForm = inject(Step).stepForm;

  type = signal(false);

  constructor() {
    this.stepForm.removeControl('step3');
    this.stepForm.addControl('step3', this.step3);
    const type: boolean = this.stepForm.get('step2.type')!.value;

    this.type.set(type);

  }

  submit(): void {
    this.route.navigate(['./step-4']);
  }

  goBack(): void {
    this.route.navigate(['./step-2']);
  }
}
