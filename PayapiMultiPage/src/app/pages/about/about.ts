import { Component } from '@angular/core';
import { About4 } from './about-4/about-4';
import { About1 } from "./about-1/about-1";
import { About2 } from './about-2/about-2';
import { About3 } from './about-3/about-3';

@Component({
  selector: 'payapi-about',
  imports: [About1, About2, About3, About4],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export default class About {

}
