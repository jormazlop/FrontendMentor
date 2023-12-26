import { Component } from '@angular/core';
import { NavItemComponent } from '../../components/nav-item/nav-item.component';

type NavItem = {
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navItems: NavItem[] = [
    { label: 'Features' },
    { label: 'Team' },
    { label: 'Sign in' }
  ]

}
