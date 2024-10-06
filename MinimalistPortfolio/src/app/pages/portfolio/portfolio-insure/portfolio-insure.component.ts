import { Component } from '@angular/core';
import { PortfolioInsure1Component } from './portfolio-insure-1/portfolio-insure-1.component';
import { PortfolioInsure2Component } from './portfolio-insure-2/portfolio-insure-2.component';
import { PortfolioInsure3Component } from './portfolio-insure-3/portfolio-insure-3.component';
import { PortfolioInsure4Component } from './portfolio-insure-4/portfolio-insure-4.component';

@Component({
  selector: 'app-portfolio-insure',
  standalone: true,
  imports: [
    PortfolioInsure1Component,
    PortfolioInsure2Component,
    PortfolioInsure3Component,
    PortfolioInsure4Component,
  ],
  templateUrl: './portfolio-insure.component.html',
  styleUrl: './portfolio-insure.component.scss',
})
export default class PortfolioInsureComponent {}
