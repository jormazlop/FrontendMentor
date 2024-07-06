import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

  private service = inject(CalculatorService);

  total = this.service.total;
  monthly = this.service.monthly;

  results = this.service.results;

}
