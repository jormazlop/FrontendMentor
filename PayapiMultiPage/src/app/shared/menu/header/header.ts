import { Component, HostListener, signal } from '@angular/core';
import { NavMenu } from '../nav-menu/nav-menu';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { NavMenuModel } from '../nav-menu/nav-menu.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'payapi-header',
  imports: [NavMenu, ButtonPrimary, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  items = signal<NavMenuModel[]>([]);

  menu = signal(false);

  @HostListener('window:resize')
  onResize() {

    if (window.innerWidth > 750) {
      this.items.set([
        {
          label: 'Pricing',
          route: 'pricing',
        },
        {
          label: 'About',
          route: 'about',
        },
        {
          label: 'Contact',
          route: 'contact',
        },
      ]);
    } else {
      this.items.set([]);
    }
  }

  onClickMenu(): void {
    this.menu.update(val => !val);
  }
}
