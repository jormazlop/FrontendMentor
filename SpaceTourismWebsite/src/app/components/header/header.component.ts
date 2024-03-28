import { Component, input, output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuOpen = output<boolean>();

  menu = input(false);

  clickMenu(): void {
    this.menuOpen.emit(!this.menu());
  }

}
