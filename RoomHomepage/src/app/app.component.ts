import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideComponent } from './section/slide/slide.component';
import { HeaderComponent } from './section/header/header.component';
import { AboutComponent } from './section/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SlideComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RoomHomepage';
}
