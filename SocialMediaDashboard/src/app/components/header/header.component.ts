import { Component } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mode = false;

  constructor(private modeService: ModeService) {}

  protected changeMode() {
    this.mode = !this.mode;
    this.modeService.setMode(this.mode);
  }
}
