import { Component, inject, model } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Body } from '@layout/body/body';
import { Footer } from '@layout/footer/footer';
import { Header } from '@layout/header/header';
import { Menu } from '@layout/menu/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Body, Footer, Menu],
})
export class App {
  menuOpened = model<boolean>(false);

  private readonly title = inject(Title);

  constructor() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./workers/title-worker.worker', import.meta.url));

      worker.onmessage = ({ data }) => {
        this.title.setTitle(data);
      };
      worker.postMessage({ type: 'start' });
    }
  }
}
