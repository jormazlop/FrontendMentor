import { Component, inject } from '@angular/core';
import { Theme } from '@services/theme';

@Component({
  imports: [],
  selector: 'app-refresh',
  styleUrl: './refresh.scss',
  templateUrl: './refresh.html',
})
export class Refresh {
  theme = inject(Theme).theme;
}
