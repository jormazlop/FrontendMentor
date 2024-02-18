import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordHeaderComponent } from './components/password-header/password-header.component';
import { PasswordBodyComponent } from './components/password-body/password-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordHeaderComponent, PasswordBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'PasswordGenerator';
}
