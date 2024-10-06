import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-index-1',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './portfolio-index-1.component.html',
  styleUrl: './portfolio-index-1.component.scss'
})
export class PortfolioIndex1Component {

}
