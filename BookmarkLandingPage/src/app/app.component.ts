import { Component } from '@angular/core';
import { ExtensionsComponent } from '@sections/extensions/extensions.component';
import { FaqComponent } from '@sections/faq/faq.component';
import { FeaturesComponent } from '@sections/features/features.component';
import { FooterComponent } from '@sections/footer/footer.component';
import { HeaderComponent } from '@sections/header/header.component';
import { SimpleBookmarkManagerComponent } from '@sections/simple-bookmark-manager/simple-bookmark-manager.component';
import { StayToDateComponent } from '@sections/stay-to-date/stay-to-date.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    SimpleBookmarkManagerComponent,
    FeaturesComponent,
    ExtensionsComponent,
    FaqComponent,
    StayToDateComponent,
    FooterComponent
  ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BookmarkLandingPage';
}
