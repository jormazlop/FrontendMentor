import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimaryButton } from '@buttons/primary-button/primary-button';
import { TextInput } from '@inputs/text-input/text-input';
import { Step } from '@services/step';
import { phoneValidator } from 'shared/utils/validators';

@Component({
  selector: 'app-step-1',
  imports: [ReactiveFormsModule, TextInput, PrimaryButton],
  templateUrl: './step-1.html',
  styleUrl: './step-1.scss'
})
export default class Step1 {

  private route = inject(Router);

  step1 = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [phoneValidator])
  });

  stepForm = inject(Step).stepForm;

  constructor() {
    this.stepForm.removeControl('step1');
    this.stepForm.addControl('step1', this.step1);
  }

  submit(): void {
    this.stepForm.markAllAsDirty();

    if(this.stepForm.valid) {
      this.route.navigate(['./step-2']);
    }
  }

}
