import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-careers-join',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './careers-join.component.html',
  styleUrl: './careers-join.component.scss'
})
export class CareersJoinComponent {

}
