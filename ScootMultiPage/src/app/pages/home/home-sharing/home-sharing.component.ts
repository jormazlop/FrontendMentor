import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-home-sharing',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './home-sharing.component.html',
  styleUrl: './home-sharing.component.scss'
})
export class HomeSharingComponent {

}
