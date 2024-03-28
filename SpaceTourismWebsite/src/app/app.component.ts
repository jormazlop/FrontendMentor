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

  openMenu(open: boolean): void {
    this.menu.set(open);
    this.sidenav()?.nativeElement.focus();
  }

  closeMenu(): void {
    this.menu.set(false);
  }
}
