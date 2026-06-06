import { Component, inject, input, output, signal } from '@angular/core';
import { GoalService } from '@shared/services/goal';
import { FormGoal } from './model';
import { required, form } from '@angular/forms/signals';
import { ButtonTertiary } from '@shared/buttons/button-tertiary/button-tertiary';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { InputAmount } from '@shared/inputs/input-amount/input-amount';
import { InputText } from '@shared/inputs/input-text/input-text';
import { Goal } from '@shared/model/model';

@Component({
  selector: 'app-detail-create-dialog',
  imports: [ButtonTertiary, ButtonPrimary, InputAmount, InputText],
  templateUrl: './detail-create-dialog.html',
  styleUrl: './detail-create-dialog.scss',
})
export class DetailCreateDialog {
  isOpen = input(false);
  close = output<void>();
  confirm = output<void>();

  private readonly service = inject(GoalService);

  formModel = signal<FormGoal>({
    target: '',
    name: '',
  });

  form = form<FormGoal>(this.formModel, (schemaPath) => {
    required(schemaPath.target),
    required(schemaPath.name)
  });

  onConfirm() {
    if (!this.form().valid()) {
      return;
    }

    const newGoal: Goal = {
      createdAt: new Date(),
      target: +this.formModel().target,
      name: this.formModel().name,
      deadline: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      deposits: [],
      id: this.indexToGoalId(this.service.goals().length),
    };

    this.service.createGoal(newGoal);

    this.confirm.emit();
  }

  onCancel() {
    this.close.emit();
  }

  private indexToGoalId(index: number): string {
    return `goal-${String(index + 1).padStart(3, '0')}`;
  }
}
