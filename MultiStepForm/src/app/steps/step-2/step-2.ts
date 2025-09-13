import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdditionalButton } from '@buttons/additional-button/additional-button';
import { PrimaryButton } from '@buttons/primary-button/primary-button';
import { RadioInput } from '@inputs/radio-input/radio-input';
import { ToggleInput } from '@inputs/toggle-input/toggle-input';
import { Step } from '@services/step';

@Component({
  selector: 'app-step-2',
  imports: [RadioInput, ToggleInput, ReactiveFormsModule, PrimaryButton, AdditionalButton],
  templateUrl: './step-2.html',
  styleUrl: './step-2.scss',
})
export default class Step2 {

  private route = inject(Router);

  step2 = new FormGroup({
    plan: new FormControl('', [Validators.required]),
    type: new FormControl(false),
  });

  stepForm = inject(Step).stepForm;

  constructor() {
    this.stepForm.removeControl('step2');
    this.stepForm.addControl('step2', this.step2);
  }

  submit(): void {
    this.stepForm.markAllAsDirty();

    if (this.stepForm.valid) {
      this.route.navigate(['./step-3']);
    }
  }

  goBack(): void {
    this.route.navigate(['./step-1']);
  }
}
