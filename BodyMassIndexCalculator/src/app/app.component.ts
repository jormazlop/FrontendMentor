import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { ActionsComponent } from './components/actions/actions.component';
import { LimitationsComponent } from './components/limitations/limitations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ExplanationComponent, ActionsComponent, LimitationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BodyMassIndexCalculator';
}
