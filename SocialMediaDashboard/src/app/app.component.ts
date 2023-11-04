import { Component, Signal } from '@angular/core';
import { ModeService } from './services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SocialMediaDashboard';

  darkMode: Signal<boolean>;

  constructor(private modeService: ModeService) {
    this.darkMode = this.modeService.getMode();
  }
}
