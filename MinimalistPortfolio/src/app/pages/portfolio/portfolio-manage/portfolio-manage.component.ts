import { Component } from '@angular/core';
import { PortfolioManage1Component } from './portfolio-manage-1/portfolio-manage-1.component';
import { PortfolioManage2Component } from './portfolio-manage-2/portfolio-manage-2.component';
import { PortfolioManage3Component } from './portfolio-manage-3/portfolio-manage-3.component';
import { PortfolioManage4Component } from './portfolio-manage-4/portfolio-manage-4.component';

@Component({
  selector: 'app-portfolio-manage',
  standalone: true,
  imports: [
    PortfolioManage1Component,
    PortfolioManage2Component,
    PortfolioManage3Component,
    PortfolioManage4Component
  ],
  templateUrl: './portfolio-manage.component.html',
  styleUrl: './portfolio-manage.component.scss',
})
export default class PortfolioManageComponent {}
