import { Component, HostListener } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { interval, timer } from 'rxjs';

export enum KEY_CODE {
  ENTER = 13
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  actualDate = new Date();

  pastDateError = false;

  incorrectDateError = false;

  outputYears = '--';
  outputMonths = '--';
  outputDays = '--'

  ageForm: FormGroup = new FormGroup({
    day: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(31),
      Validators.pattern("^[0-9]*$"),
    ]),
    month: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(12),
      Validators.pattern("^[0-9]*$"),
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(this.actualDate.getFullYear()),
      Validators.pattern("^[0-9]*$"),
    ]),
  });

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.ENTER) {
      this.calculateAge();
    }
  }

  invalidDay(): boolean {
    return this.ageForm.controls['day'].invalid && this.ageForm.controls['day'].dirty;
  }

  invalidMonth(): boolean {
    return this.ageForm.controls['month'].invalid && this.ageForm.controls['month'].dirty;
  }

  invalidYear(): boolean {
    return this.ageForm.controls['year'].invalid && this.ageForm.controls['year'].dirty;
  }

  enabledButton(): boolean {

    const enabled = this.ageForm.controls['day'].valid && this.ageForm.controls['month'].valid && this.ageForm.controls['year'].valid;

    if (!enabled) {
      this.outputYears = '--';
      this.outputMonths = '--';
      this.outputDays = '--';
    }

    return enabled;
  }

  calculateAge(): void {

    if (!this.enabledButton()) {
      return;
    }

    const inputDay = Number(this.ageForm.controls['day'].value);
    const inputMonth = Number(this.ageForm.controls['month'].value) - 1;
    const inputYear = Number(this.ageForm.controls['year'].value);

    const inputDate = new Date(inputYear, inputMonth, inputDay);

    if(inputDate.getDate() != inputDay || inputDate.getMonth() != inputMonth) {
      this.incorrectDateError = true;
      this.outputYears = '--';
      this.outputMonths = '--';
      this.outputDays = '--';
      return;
    }

    if(inputDate > this.actualDate) {
      this.pastDateError = true;
      this.outputYears = '--';
      this.outputMonths = '--';
      this.outputDays = '--';
    } else {
      this.pastDateError = false;
      this.incorrectDateError = false;

      const timer$ = timer(400);
      const interval$ = interval(50);

      const intervalSubscription = interval$.subscribe(() => {

        const years = Math.floor(Math.random() * 100);
        const months = Math.floor(Math.random() * 12);
        const days = Math.floor(Math.random() * 30);

        this.outputYears = years.toString();
        this.outputMonths = months.toString();
        this.outputDays = days.toString();
      })

      timer$.subscribe(() => {
        intervalSubscription.unsubscribe();
        const seconds = (this.actualDate.getTime() - inputDate.getTime()) / 1000;

        const years = Math.floor(seconds / 31536000);
        const months = Math.floor((seconds % 31536000) / 2628000);
        const days = Math.floor(((seconds % 31536000) % 2628000) / 86400);

        this.outputYears = years.toString();
        this.outputMonths = months.toString();
        this.outputDays = days.toString();
      })


    }
  }

}
