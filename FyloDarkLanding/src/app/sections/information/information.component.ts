import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {

}
