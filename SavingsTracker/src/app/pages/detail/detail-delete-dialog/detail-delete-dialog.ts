import { Component, input, output } from '@angular/core';
import { ButtonTertiary } from '@shared/buttons/button-tertiary/button-tertiary';
import { Goal } from '@shared/model/model';

@Component({
  selector: 'app-detail-delete-dialog',
  imports: [ButtonTertiary],
  templateUrl: './detail-delete-dialog.html',
  styleUrl: './detail-delete-dialog.scss',
})
export class DetailDeleteDialog {
  isOpen = input(false);
  confirmed = output<void>();
  cancelled = output<void>();
  goal = input.required<Goal>();

  onConfirm() {
    this.confirmed.emit();
  }

  onCancel() {
    this.cancelled.emit();
  }
}
