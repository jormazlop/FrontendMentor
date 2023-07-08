import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailRoutingModule } from './details-routing.module';
import { MapComponent } from './map/map.component';
import { LocationComponent } from './location/location.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetailsComponent,
    MapComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
