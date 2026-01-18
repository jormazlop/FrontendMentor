import { Component } from '@angular/core';
import { ButtonMode } from '@shared/buttons/button-mode/button-mode';
import { Logo } from '@shared/logo/logo';

@Component({
  selector: 'app-header',
  imports: [Logo, ButtonMode],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
