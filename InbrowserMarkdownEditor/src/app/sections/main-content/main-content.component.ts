import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { HeaderComponent } from '../../components/header/header.component';
import { BodyComponent } from '../../components/body/body.component';
import { ModeService } from '../../services/mode.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, NgClass],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  mode$ = inject(ModeService).mode$;

  sidenavService = inject(SidenavService);
  sidenav$ = this.sidenavService.sidenav$;

}
