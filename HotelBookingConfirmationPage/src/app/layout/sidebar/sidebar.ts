import { Component, inject, input } from '@angular/core';
import { Bed } from '@icons/bed/bed';
import { BreakfastOutline } from '@icons/breakfast-outline/breakfast-outline';
import { Close } from '@icons/close/close';
import { House } from '@icons/house/house';
import { Mail } from '@icons/mail/mail';
import { Pin } from '@icons/pin/pin';
import { Sun } from '@icons/sun/sun';
import { MenuService } from '@services/menu';

@Component({
  selector: 'app-sidebar',
  imports: [Sun, Bed, House, Pin, BreakfastOutline, Mail, Close],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  responsive = input(false);

  private readonly service = inject(MenuService);

  changeMenu(): void {
    this.service.changeMenu();
  }
}
