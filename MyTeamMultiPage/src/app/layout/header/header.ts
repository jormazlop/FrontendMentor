import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '@shared/components/button/button';
import { Menu } from '@shared/services/menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly service = inject(Menu);
  menu = this.service.menu;

  changeMenu(): void {
    this.service.changeMenu();
  }
}
