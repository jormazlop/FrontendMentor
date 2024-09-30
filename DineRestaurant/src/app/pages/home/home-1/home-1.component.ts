import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-1',
  standalone: true,
  imports: [ButtonComponent, LogoComponent, RouterModule],
  templateUrl: './home-1.component.html',
  styleUrl: './home-1.component.scss'
})
export class Home1Component {

}
