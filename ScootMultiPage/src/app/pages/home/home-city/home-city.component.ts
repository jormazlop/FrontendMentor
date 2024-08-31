import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-home-city',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './home-city.component.html',
  styleUrl: './home-city.component.scss'
})
export class HomeCityComponent {

}
