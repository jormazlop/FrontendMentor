import { Component } from '@angular/core';
import { Home1 } from './home-1/home-1';
import { Home2 } from './home-2/home-2';
import { Home3 } from './home-3/home-3';
import { Home4 } from './home-4/home-4';
import { Home5 } from './home-5/home-5';

@Component({
  selector: 'payapi-home',
  imports: [Home1, Home2, Home3, Home4, Home5],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {}
