import { Component, inject } from '@angular/core';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-home-started',
  imports: [],
  templateUrl: './home-started.html',
  styleUrl: './home-started.scss',
})
export default class HomeStarted {
  selectedTest = inject(Typing).selectedTest;
}
