import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ready',
  imports: [Button, RouterLink],
  templateUrl: './ready.html',
  styleUrl: './ready.scss',
})
export class Ready {

}
