import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { ButtonTertiary } from '@shared/buttons/button-tertiary/button-tertiary';
import { Goal } from '@shared/model/model';
import { form, required } from '@angular/forms/signals';
import { InputAmount } from '@shared/inputs/input-amount/input-amount';
import { InputText } from '@shared/inputs/input-text/input-text';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { GoalService } from '@shared/services/goal';
import { FormGoal } from './model';

@Component({
  selector: 'app-detail-edit-dialog',
  imports: [ButtonTertiary, ButtonPrimary, InputAmount, InputText],
  templateUrl: './detail-edit-dialog.html',
  styleUrl: './detail-edit-dialog.scss',
})
export class DetailEditDialog implements OnInit {
  isOpen = input(false);
  close = output<void>();
  confirm = output<void>();
  goal = input.required<Goal>();

  private readonly service = inject(GoalService);

  formModel = signal<FormGoal>({
    target: '',
    name: '',
  });

  form = form<FormGoal>(this.formModel, schemaPath => {
    required(schemaPath.target)
  });

  ngOnInit(): void {
    this.formModel.set({ target: this.goal().target.toString(), name: this.goal().name })
  }

  onConfirm() {

    if(!this.form().valid()) {
      return;
    }

    const newGoal = structuredClone(this.goal());

    newGoal.name = this.formModel().name;
    newGoal.target = +this.formModel().target;

    this.service.updateGoal(newGoal);

    this.confirm.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
