import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BmiCalculatorComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
