import { ChangeDetectorRef, Component, ElementRef, Signal, computed, effect, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgClass, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SpaceTourismWebsite';
  private route: Signal<NavigationEnd> = toSignal(inject(Router).events.pipe(filter(r => r instanceof NavigationEnd))) as Signal<NavigationEnd>;

  section$ = computed(() => {
    return this.route() ? this.route().url.slice(1) : 'home';
  });

  menu = signal(false);

  sidenav = viewChild<ElementRef>('sidenav');

  constructor() {
    addEventListener("DOMContentLoaded", this.preloadImages, true);
  }

  preloadImages() {
    const imageArray = new Array(
      "assets/destination/background-destination-desktop.jpg",
      "assets/destination/background-destination-mobile.jpg",
      "assets/destination/background-destination-tablet.jpg",
      "assets/destination/image-europa.webp",
      "assets/destination/image-mars.webp",
      "assets/destination/image-moon.webp",
      "assets/destination/image-titan.webp",
      "assets/crew/background-crew-desktop.jpg",
      "assets/crew/background-crew-mobile.jpg",
      "assets/crew/background-crew-tablet.jpg",
      "assets/crew/image-douglas-hurley.webp",
      "assets/technology/background-technology-desktop.jpg",
      "assets/technology/background-technology-mobile.jpg",
      "assets/technology/background-technology-tablet.jpg",
      "assets/technology/image-launch-vehicle-landscape.jpg",
      "assets/technology/image-launch-vehicle-portrait.jpg",
      );

    for (let i = 0; i < imageArray.length; i++) {
        const tempImage = new Image();
        tempImage.src = imageArray[i];
    }
  }

  openMenu(open: boolean): void {
    this.menu.set(open);
    this.sidenav()?.nativeElement.focus();
  }

  closeMenu(): void {
    this.menu.set(false);
  }
}
