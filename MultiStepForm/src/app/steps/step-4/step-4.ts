import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AdditionalButton } from '@buttons/additional-button/additional-button';
import { PrimaryButton } from '@buttons/primary-button/primary-button';
import { Step } from '@services/step';

@Component({
  selector: 'app-step-4',
  imports: [PrimaryButton, AdditionalButton, TitleCasePipe],
  templateUrl: './step-4.html',
  styleUrl: './step-4.scss',
})
export default class Step4 {
  private route = inject(Router);

  stepForm = inject(Step).stepForm;

  type = signal(false);
  plan = signal('Arcade');
  addons = signal<string[]>([]);
  typeText = computed(() => this.type() ? 'Yearly' : 'Monthly');

  total = computed(() => {

    let price = this.type() ? 90 : 9;
    if(this.plan() == 'advanced') price = this.type() ? 120 : 12;
    if(this.plan() == 'pro') price = this.type() ? 150 : 15;
    this.addons().forEach(val =>  {
      let value = +val.replace(/\D/g, '');
      price += value;
    });

    return price;
  })

  constructor() {
    const type: boolean = this.stepForm.get('step2.type')!.value;
    const plan: string = this.stepForm.get('step2.plan')!.value;
    const addons: string[] = this.stepForm.get('step3.addons')!.value;
    this.type.set(type);
    this.plan.set(plan);
    this.addons.set(addons);
  }

  submit(): void {
    this.route.navigate(['./final-step']);
  }

  goBack(): void {
    this.route.navigate(['./step-3']);
  }
}
