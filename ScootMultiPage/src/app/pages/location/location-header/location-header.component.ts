import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-location-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './location-header.component.html',
  styleUrl: './location-header.component.scss'
})
export class LocationHeaderComponent {

}
