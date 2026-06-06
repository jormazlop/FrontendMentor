import { Component, inject, input, signal } from '@angular/core';
import { FormDeposit } from './model';
import { form, required } from '@angular/forms/signals';
import { InputText } from '@shared/inputs/input-text/input-text';
import { InputAmount } from '@shared/inputs/input-amount/input-amount';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { Deposit, Goal } from '@shared/model/model';
import { GoalService } from '@shared/services/goal';

@Component({
  selector: 'app-detail-deposit',
  imports: [InputAmount, InputText, ButtonPrimary],
  templateUrl: './detail-deposit.html',
  styleUrl: './detail-deposit.scss',
})
export class DetailDeposit {
  private service = inject(GoalService);

  formModel = signal<FormDeposit>({
    amount: '',
    note: '',
  });

  form = form<FormDeposit>(this.formModel, schemaPath => {
    required(schemaPath.amount)
  });

  goal = input.required<Goal>();

  onAddFunds(): void {
    if (!this.form().valid()) {
      return;
    }

    const newGoal = structuredClone(this.goal());

    const deposit: Deposit = {
      id: this.indexToDepositId(newGoal.deposits.length),
      amount: +this.formModel().amount,
      note: this.formModel().note,
      createdAt: new Date(),
    };

    newGoal.deposits = [...newGoal.deposits, deposit];

    this.service.updateGoal(newGoal);
  }

  private indexToDepositId(index: number): string {
    const letter = String.fromCharCode(97 + (index % 26));
    return `dep-${String(index).padStart(3, '0')}-${letter}`;
  }
}
