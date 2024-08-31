import { Component } from '@angular/core';
import { AppStoreComponent } from '../../icons/app-store/app-store.component';
import { GooglePlayComponent } from '../../icons/google-play/google-play.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AppStoreComponent, GooglePlayComponent, TranslateModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
