import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent {

  typeBmi = 'metric';
  bmi = 0;
  range = '';
  classification = 'welcome';
  height1 = '';
  height2 = '';
  weight1 = '';
  weight2 = '';

  calculateBMI(): void {

    if (this.typeBmi === 'metric' && (!this.height1 || !this.weight1)) {
      this.classification = 'welcome';
      return;
    } else if (this.typeBmi === 'imperial' && (!this.height1 || !this.height2 || !this.weight1 || !this.weight2)) {
      this.classification = 'welcome';
      return;
    }

    let height = 0;

    if (this.typeBmi === 'metric') {
      height = Number(this.height1) / 100;
      this.bmi = Number(this.weight1) / (height * height);
    }

    if (this.typeBmi === 'imperial') {
      height = Number(this.height1) * 30.48 + Number(this.height2) * 2.54;
      height = height / 100;

      const weight = Number(this.weight1) * 6.35 + Number(this.weight2) * 0.45;

      this.bmi = Number(weight) / (height * height);
    }

    if (this.bmi >= 30) {
      this.classification = 'obese';
    } else if (this.bmi >= 25) {
      this.classification = 'overweight';
    } else if (this.bmi >= 18.5) {
      this.classification = 'healthy weight';
    } else if (this.bmi >= 0) {
      this.classification = 'underweight';
    } else {
      this.classification = 'welcome';
    }

    const minimal = (18.5 * (height * height)).toFixed(1);
    const maximal = (25 * (height * height)).toFixed(1);

    this.range = minimal + 'kgs - ' + maximal + 'kgs.';
  }

  changeTypeBMI(): void {
    this.height1 = '';
    this.height2 = '';
    this.weight1 = '';
    this.weight2 = '';
    this.classification = 'welcome';
  }

}
