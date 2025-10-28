import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '@shared/components/button/button';
import { Logo } from '@shared/components/logo/logo';
import { ClickOutside } from '@shared/directives/click-outside';

@Component({
  selector: 'app-header',
  imports: [Logo, Button, RouterLink, RouterLinkActive, ClickOutside],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  responsiveMenu = signal(false);

  openMenu(): void {
    this.responsiveMenu.set(true);
  }

  closeMenu(): void {
    this.responsiveMenu.set(false);
  }
}
