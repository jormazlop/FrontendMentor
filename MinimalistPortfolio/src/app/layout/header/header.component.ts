import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = signal(false);


  onClickMenu(): void {
    this.menu.update(val => !val);
  }
}
