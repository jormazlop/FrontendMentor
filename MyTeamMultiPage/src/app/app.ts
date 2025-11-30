import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Button } from '@shared/components/button/button';
import { Menu } from '@shared/services/menu';
import { Footer } from 'layout/footer/footer';
import { Header } from 'layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer, Button, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('MyTeamMultiPage');

  private readonly service = inject(Menu);
  menu = this.service.menu;

  changeMenu(): void {
    this.service.changeMenu();
  }
}
