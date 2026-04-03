import { Component, input } from '@angular/core';
import { NavMenuModel } from './nav-menu.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoPayapi } from '@shared/logos/logo-payapi/logo-payapi';

@Component({
  selector: 'payapi-nav-menu',
  imports: [RouterLink, RouterLinkActive, LogoPayapi],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.scss',
})
export class NavMenu {
  items = input.required<NavMenuModel[]>();
}
