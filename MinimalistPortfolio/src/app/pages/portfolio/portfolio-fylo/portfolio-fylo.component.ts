import { Component } from '@angular/core';
import { PortfolioFylo1Component } from './portfolio-fylo-1/portfolio-fylo-1.component';
import { PortfolioFylo2Component } from './portfolio-fylo-2/portfolio-fylo-2.component';
import { PortfolioFylo3Component } from './portfolio-fylo-3/portfolio-fylo-3.component';
import { PortfolioFylo4Component } from './portfolio-fylo-4/portfolio-fylo-4.component';

@Component({
  selector: 'app-portfolio-fylo',
  standalone: true,
  imports: [
    PortfolioFylo1Component,
    PortfolioFylo2Component,
    PortfolioFylo3Component,
    PortfolioFylo4Component,
  ],
  templateUrl: './portfolio-fylo.component.html',
  styleUrl: './portfolio-fylo.component.scss',
})
export default class PortfolioFyloComponent {}
