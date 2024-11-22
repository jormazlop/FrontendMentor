import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { HoverNavigationDirective } from '../../directives/hover-navigation.directive';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [TitleCasePipe, HoverNavigationDirective],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  menus = input.required<string[]>();
}
