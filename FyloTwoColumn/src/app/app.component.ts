import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { GettingStartedComponent } from './sections/getting-started/getting-started.component';
import { StayProductiveComponent } from './sections/stay-productive/stay-productive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, GettingStartedComponent, StayProductiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'FyloTwoColumn';

}
