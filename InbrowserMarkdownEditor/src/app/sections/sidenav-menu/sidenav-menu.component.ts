import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss'
})
export class SidenavMenuComponent {
  sidenav$ = inject(SidenavService).sidenav$;
}
