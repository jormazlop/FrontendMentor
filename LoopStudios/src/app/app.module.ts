import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { VrComponent } from './componentes/vr/vr.component';
import { CreationsComponent } from './componentes/creations/creations.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VrComponent,
    CreationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbOffcanvasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
