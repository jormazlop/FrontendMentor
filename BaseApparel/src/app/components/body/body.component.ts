import { Component } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  darkMode = false;

  constructor(private modeService: ModeService) {}

  changeMode(): void {
    this.modeService.setMode(this.darkMode);
  }
}
