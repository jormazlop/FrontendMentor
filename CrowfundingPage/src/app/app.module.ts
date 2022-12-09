import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CollectComponent } from './components/body/collect/collect.component';
import { RewardComponent } from './components/body/reward/reward.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalProjectComponent } from './components/modal-project/modal-project.component';
import { FormsModule } from '@angular/forms';
import { ModalThanksComponent } from './components/modal-thanks/modal-thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CollectComponent,
    RewardComponent,
    ModalProjectComponent,
    ModalThanksComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
