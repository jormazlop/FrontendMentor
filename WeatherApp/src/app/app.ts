import { Component, signal } from '@angular/core';
import { Header } from './page/header/header';
import { Body } from 'page/body/body';

@Component({
  selector: 'app-root',
  imports: [Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Weather App');
}
