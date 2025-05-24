import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from '../components/header/header.component';
import { AppComponent } from './app/app.component';
import { FooterComponent } from '../components/footer/footer.component';

createApplication(appConfig)
    .then((app) => {
        const Header = createCustomElement(HeaderComponent, { injector: app.injector });
        customElements.define('header-web-component', Header);

        const Footer = createCustomElement(FooterComponent, { injector: app.injector });
        customElements.define('footer-web-component', Footer);
    })
    .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
