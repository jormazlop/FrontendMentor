import { Component, effect, inject } from '@angular/core';
import { IpaddressService } from '../../services/ipaddress.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  private map!: L.Map;
  ip = inject(IpaddressService).ip;
  private lat = 0;
  private long = 0;

  private icon = L.icon({
    iconUrl: 'assets/icon-location.svg',
    iconSize: [23, 28]
  });

  constructor() {
    effect(() => {
      this.map.eachLayer(layer => {
        if(!layer.getAttribution!()) {
          this.map.removeLayer(layer)
        }
      });

      this.lat = this.ip().location.lat;
      this.long = this.ip().location.lng;
        const marker = L.marker([this.lat, this.long], { draggable: true, icon: this.icon });
        this.map.addLayer(marker);
        this.map.flyTo([this.lat, this.long], 15);
      });
  }

  ngAfterViewInit() {
    this.lat = this.ip().location.lat;
    this.long = this.ip().location.lng;
    this.initMap(this.lat, this.long);
  }

  private initMap(lat: number, long: number): void {
    this.map?.remove();
    this.map = L.map('map', {
      center: [lat, long],
      zoom: 3,
    });

    const marker = L.marker([lat, long], { draggable: true, autoPan: true, icon: this.icon });
    this.map.addLayer(marker);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    this.map.flyTo([lat, long], 15);

  }
}
