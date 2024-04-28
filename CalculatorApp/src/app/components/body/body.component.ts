import { Component, WritableSignal, inject, signal } from '@angular/core';
import { BodyButtonComponent } from '../body-button/body-button.component';
import { CalculatorService } from '../../services/calculator.service';

type CalculatorButton = {
  value: string | number;
  type: 'primary' | 'secondary' | 'tertiary'
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BodyButtonComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  calculatorService = inject(CalculatorService);

  buttons: WritableSignal<CalculatorButton[]> = signal([
    { value: 7, type: 'primary' },
    { value: 8, type: 'primary' },
    { value: 9, type: 'primary' },
    { value: 'DEL', type: 'secondary' },
    { value: 4, type: 'primary' },
    { value: 5, type: 'primary' },
    { value: 6, type: 'primary' },
    { value: '+', type: 'primary' },
    { value: 1, type: 'primary' },
    { value: 2, type: 'primary' },
    { value: 3, type: 'primary' },
    { value: '-', type: 'primary' },
    { value: '.', type: 'primary' },
    { value: 0, type: 'primary' },
    { value: '/', type: 'primary' },
    { value: 'x', type: 'primary' },
    { value: 'RESET', type: 'secondary' },
    { value: '=', type: 'tertiary' },
  ]);

  clickButton(value: string | number): void {

    switch(value) {
      case 'RESET':
        this.calculatorService.resetValue();
        break;
      case 'DEL':
        this.calculatorService.deleteValue();
        break;
      case '+':
        this.calculatorService.addValue();
        break;
      case '-':
        this.calculatorService.substractValue();
        break;
      case 'x':
        this.calculatorService.multiplyValue();
        break;
      case '/':
        this.calculatorService.divideValue();
        break;
      case '.':
        this.calculatorService.clickDecimal();
        break;
      case '=':
        this.calculatorService.seeTotal();
        break;
      default:
        this.calculatorService.clickValue(value)
    }
  }
}
