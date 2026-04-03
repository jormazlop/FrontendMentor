import { Component } from '@angular/core';
import { NavMenuModel } from '../nav-menu/nav-menu.model';
import { NavMenu } from '../nav-menu/nav-menu';

@Component({
  selector: 'payapi-footer',
  imports: [NavMenu],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  items: NavMenuModel[] = [
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
  ];
}
