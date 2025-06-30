import { Injectable, signal } from '@angular/core';
import { Selection } from '@shared/models/selection';

@Injectable({
  providedIn: 'root',
})
export class LogMoodService {
  private readonly _step = signal(1);
  step = this._step.asReadonly();

  private readonly _selection = signal<Selection>({} as Selection);
  selection = this._selection.asReadonly();

  nextStep(): void {
    this._step.update((val) => ++val);
  }

  setStep1(value: string): void {
    this._selection.update((val) => {
      val.step1 = value;
      return { ...val };
    });
  }

  setStep2(value: string, checked: boolean): void {
    this._selection.update((val) => {
      if (checked) {
        val.step2 ? val.step2.push(value) : (val.step2 = [value]);
      } else {
        const index = val.step2!.indexOf(value);
        val.step2?.splice(index, 1);
      }

      return { ...val };
    });
  }

  setStep3(value: string): void {
    this._selection.update((val) => {
      val.step3 = value;
      return { ...val };
    });
  }

  setStep4(value: string): void {
    this._selection.update((val) => {
      val.step4 = value;
      return { ...val };
    });
  }
}
