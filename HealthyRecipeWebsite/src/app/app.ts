import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Scroll } from '@shared/directives/scroll';
import { Footer } from '@shared/layout/footer/footer';
import { Header } from '@shared/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Scroll],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('HealthyRecipeWebsite');
}
