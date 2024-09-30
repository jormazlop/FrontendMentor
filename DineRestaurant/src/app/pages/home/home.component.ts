import { Component } from '@angular/core';
import { Home1Component } from './home-1/home-1.component';
import { Home2Component } from './home-2/home-2.component';
import { Home3Component } from './home-3/home-3.component';
import { Home4Component } from './home-4/home-4.component';
import { Home5Component } from './home-5/home-5.component';
import { Home6Component } from './home-6/home-6.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    Home6Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
