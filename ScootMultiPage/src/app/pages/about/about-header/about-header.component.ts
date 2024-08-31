import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.scss'
})
export class AboutHeaderComponent {

}
