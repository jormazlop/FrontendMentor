import { Component } from '@angular/core';
import { HeaderComponent } from '../../sections/header/header.component';
import { InfoComponent } from '../../sections/info/info.component';
import { MapComponent } from '../../sections/map/map.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, InfoComponent, MapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export default class MainComponent {

}
