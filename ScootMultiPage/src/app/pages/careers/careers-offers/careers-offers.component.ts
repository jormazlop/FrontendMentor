import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-careers-offers',
  standalone: true,
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './careers-offers.component.html',
  styleUrl: './careers-offers.component.scss'
})
export class CareersOffersComponent {

}
