import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-telemetry',
  standalone: true,
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './home-telemetry.component.html',
  styleUrl: './home-telemetry.component.scss'
})
export class HomeTelemetryComponent {

}
