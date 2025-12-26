import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { IconPersonalBest } from '../../shared/icons/icon-personal-best/icon-personal-best';

@Component({
  selector: 'app-header',
  imports: [Logo, IconPersonalBest],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
