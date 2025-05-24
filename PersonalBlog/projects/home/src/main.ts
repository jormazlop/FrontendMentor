import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

createApplication(appConfig)
  .then((app) => {
    const HomeComponent = createCustomElement(AppComponent, {
      injector: app.injector,
    });
    customElements.define('home-page', HomeComponent);
  })
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
