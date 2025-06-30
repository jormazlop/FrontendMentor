import { Component, computed, inject, signal } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { Close } from '@shared/icons/close/close';
import { Stepper } from './stepper/stepper';
import { LogMoodService } from './service/log-mood';
import { PrimaryButton } from '@shared/buttons/primary-button/primary-button';
import { TextButtonPipe } from './pipe/text-button-pipe';
import { Step1 } from './step-1/step-1';
import { Step2 } from './step-2/step-2';
import { Step3 } from './step-3/step-3';
import { Step4 } from './step-4/step-4';

@Component({
  selector: 'app-log-mood',
  imports: [
    Close,
    Stepper,
    PrimaryButton,
    TextButtonPipe,
    Step1,
    Step2,
    Step3,
    Step4,
  ],
  templateUrl: './log-mood.html',
  providers: [LogMoodService],
  styleUrl: './log-mood.scss',
})
export class LogMood {

  private readonly dialog = inject(MatDialogRef<LogMood>);

  private readonly service = inject(LogMoodService);
  step = this.service.step;

  disabled = computed(() => {
    switch (this.step()) {
      case 1:
        return !this.service.selection().step1;
      case 2:
        return !this.service.selection().step2?.length;
      case 3:
        return !this.service.selection().step3;
      case 4:
        return !this.service.selection().step4;
      default:
        return true;
    }
  });

  closeDialog(): void {
    this.dialog.close();
  }

  nextStep(): void {
    if (this.step() < 4) {
      this.service.nextStep();
    } else {
      this.dialog.close(this.service.selection());
    }
  }
}
