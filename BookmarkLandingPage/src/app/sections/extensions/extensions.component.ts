import { Component, signal } from '@angular/core';
import { ExtensionComponent } from './extension/extension.component';
import { Extension } from './models/extension.model';

@Component({
  selector: 'app-extensions',
  imports: [ExtensionComponent],
  templateUrl: './extensions.component.html',
  styleUrl: './extensions.component.scss'
})
export class ExtensionsComponent {

  extensions = signal<Extension[]>([
    { image: 'logo-chrome', broswer: 'Chrome', version: 62 },
    { image: 'logo-firefox', broswer: 'Firefox', version: 55 },
    { image: 'logo-opera', broswer: 'Opera', version: 46 }
  ]);
}
