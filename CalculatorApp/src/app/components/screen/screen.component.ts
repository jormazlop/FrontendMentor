import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { ScreenPipe } from '../../pipes/screen.pipe';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [ScreenPipe],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent {

  value$ = inject(CalculatorService).value$;

  temporary$ = inject(CalculatorService).temporary$;
}
