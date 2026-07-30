import { Component, inject, signal } from '@angular/core';
import { Menu } from '@icons/menu/menu';
import { Sun } from '@icons/sun/sun';
import { Body } from '@layout/body/body';
import { Footer } from '@layout/footer/footer';
import { Header } from '@layout/header/header';
import { Sidebar } from '@layout/sidebar/sidebar';
import { MenuService } from '@services/menu';

@Component({
  selector: 'app-root',
  imports: [Header, Body, Footer, Sidebar, Sun, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HotelBookingConfirmationPage');

  private readonly service = inject(MenuService);
  open = inject(MenuService).open;

  changeMenu(): void {
    this.service.changeMenu();
  }
}
