import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  sidenavService = inject(SidenavService);
  sidenav$ = this.sidenavService.sidenav$;

}
