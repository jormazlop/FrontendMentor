import { Component, inject } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  sidenavService = inject(SidenavService);
  sidenav$ = this.sidenavService.sidenav$;

  onClickMenu(): void {
    this.sidenavService.clickSidenav();
  }

}
