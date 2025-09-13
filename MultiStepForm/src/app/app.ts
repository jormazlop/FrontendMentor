import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepResume } from '@components/step-resume/step-resume';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StepResume],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MultiStepForm');
}
