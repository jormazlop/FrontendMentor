import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-home-payments',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './home-payments.component.html',
  styleUrl: './home-payments.component.scss'
})
export class HomePaymentsComponent {

}
