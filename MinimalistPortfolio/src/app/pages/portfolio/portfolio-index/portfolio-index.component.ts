import { Component } from '@angular/core';
import { PortfolioIndex1Component } from './portfolio-index-1/portfolio-index-1.component';
import { PortfolioIndex2Component } from './portfolio-index-2/portfolio-index-2.component';
import { PortfolioIndex3Component } from './portfolio-index-3/portfolio-index-3.component';
import { PortfolioIndex4Component } from "./portfolio-index-4/portfolio-index-4.component";
import { PortfolioIndex5Component } from './portfolio-index-5/portfolio-index-5.component';

@Component({
  selector: 'app-portfolio-index',
  standalone: true,
  imports: [
    PortfolioIndex1Component,
    PortfolioIndex2Component,
    PortfolioIndex3Component,
    PortfolioIndex4Component,
    PortfolioIndex5Component
],
  templateUrl: './portfolio-index.component.html',
  styleUrl: './portfolio-index.component.scss',
})
export default class PortfolioIndexComponent {}
