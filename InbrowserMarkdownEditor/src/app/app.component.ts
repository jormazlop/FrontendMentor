import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavMenuComponent } from './sections/sidenav-menu/sidenav-menu.component';
import { MainContentComponent } from './sections/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavMenuComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InbrowserMarkdownEditor';
}
