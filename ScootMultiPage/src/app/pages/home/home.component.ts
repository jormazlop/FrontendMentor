import { Component } from '@angular/core';
import { HomeSharingComponent } from './home-sharing/home-sharing.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeTelemetryComponent } from './home-telemetry/home-telemetry.component';
import { HomeCityComponent } from './home-city/home-city.component';
import { HomePaymentsComponent } from './home-payments/home-payments.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeSharingComponent,
    HomeFeaturesComponent,
    HomeTelemetryComponent,
    HomeCityComponent,
    HomePaymentsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
