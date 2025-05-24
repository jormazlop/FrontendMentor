import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

createApplication(appConfig)
  .then((app) => {
    const BlogComponent = createCustomElement(AppComponent, {
      injector: app.injector,
    });
    customElements.define('blog-page', BlogComponent);
  })
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
