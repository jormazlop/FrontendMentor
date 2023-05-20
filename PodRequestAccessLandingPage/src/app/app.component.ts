import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BodyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PodRequestAccessLandingPage';
}
