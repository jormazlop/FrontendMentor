import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './features/feature/feature.component';
import { ImageDirective } from './features/feature/image.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    DescriptionComponent,
    FeaturesComponent,
    FeatureComponent,
    ImageDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
