import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeMenu } from '@layout/home-menu/home-menu';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-home',
  imports: [HomeMenu, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly service = inject(Typing);
}
