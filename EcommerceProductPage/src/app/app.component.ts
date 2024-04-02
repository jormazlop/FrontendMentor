import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PreviewComponent } from './components/preview/preview.component';
import { DescriptionComponent } from './components/description/description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PreviewComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'EcommerceProductPage';

  menu = signal(false);

  openMenu(): void {
    this.menu.set(true);
  }

  closeMenu(): void {
    this.menu.set(false);
  }
}
