import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.scss']
})
export class SliderComponentComponent {

  switchValue = false;

  value: number = 16;
  options: Options = {
    floor: 0,
    ceil: 100
  };

}
