import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-location-message',
  standalone: true,
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './location-message.component.html',
  styleUrl: './location-message.component.scss'
})
export class LocationMessageComponent {

}
