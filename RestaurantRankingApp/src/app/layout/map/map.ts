import {
  afterNextRender,
  Component,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import OlMap from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat } from 'ol/proj.js';
import { Places } from '@services/places';
import { Meta, Place } from '@models/places';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Fill from 'ol/style/Fill.js';
import Icon from 'ol/style/Icon.js';
import Style from 'ol/style/Style.js';
import Text from 'ol/style/Text.js';
import { MapTooltip } from './map-tooltip/map-tooltip';
import Overlay from 'ol/Overlay.js';

const markerSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36">
    <path
      d="M15 1.5C7.5 1.5 1.5 7.5 1.5 15c0 8.25 13.5 19.5 13.5 19.5S28.5 23.25 28.5 15C28.5 7.5 22.5 1.5 15 1.5Z"
      fill="oklch(0.52 0.098 150)"
      stroke="oklch(0.988 0.012 150)"
      stroke-width="3"
      stroke-linejoin="round"
    />
  </svg>
`;

@Component({
  imports: [MapTooltip],
  selector: 'app-map',
  styleUrl: './map.scss',
  templateUrl: './map.html',
})
export class Map implements OnDestroy {
  mapElement = viewChild<ElementRef<HTMLDivElement>>('map');
  hoveredPlace = signal<Place | null>(null);
  tooltipElement = viewChild<ElementRef<HTMLElement>>('tooltip');

  private tooltipOverlay?: Overlay;

  service = inject(Places);

  places = this.service.places;
  meta = this.service.meta;

  selectedPlace = this.service.selectedPlace;

  private map?: OlMap;
  private markerSource = new VectorSource();

  private markerLayer = new VectorLayer({
    source: this.markerSource,
    style: (feature) => {
      const scale = feature.get('placeId') === this.selectedPlace()?.id ? 1.2 : 1;
      return new Style({
        image: new Icon({
          src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markerSvg)}`,
          anchor: [0.5, 1],
          scale: scale,
        }),
        text: new Text({
          text: String(feature.get('position') ?? ''),
          font: '500 10px Switzer, sans-serif',
          fill: new Fill({ color: 'oklch(0.988 0.012 150)' }),
          textAlign: 'center',
          textBaseline: 'middle',
          justify: 'center',
          offsetY: -21 * scale,
        }),
      });
    },
  });

  constructor() {
    effect(() => {
      const meta = this.meta();
      if (!meta) {
        return;
      }
      untracked(() => {
        this.initializeMap(meta);
      });
    });

    effect(() => {
      const places = this.places();
      if (!places.length) {
        return;
      }
      untracked(() => {
        this.updateMapMarkers(places);
      });
    });

    effect(() => {
      const selectedPlace = this.selectedPlace();
      if (!selectedPlace) {
        return;
      }
      untracked(() => {
        const feature = this.markerSource
          .getFeatures()
          .find((f) => f.get('placeId') === selectedPlace.id);
        if (feature) {
          const geometry = feature.getGeometry() as Point;
          const coordinates = geometry.getCoordinates();
          this.map?.getView().animate({ center: coordinates, duration: 500 });
        }
      });
    });
  }

  private initializeMap(meta: Meta): void {
    const tooltipOverlay = new Overlay({
      element: this.tooltipElement()!.nativeElement,
      positioning: 'bottom-center',
      offset: [0, -12],
      stopEvent: false,
    });

    this.tooltipOverlay = tooltipOverlay;

    this.map = new OlMap({
      target: this.mapElement()!.nativeElement,
      overlays: [tooltipOverlay],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.markerLayer,
      ],
      view: new View({
        center: fromLonLat([meta.center.lng, meta.center.lat]),
        zoom: 15,
      }),
    });

    this.map.on('pointermove', (event) => {
      const target = this.map?.getTargetElement();
      if (!target) {
        return;
      }

      if (event.dragging) {
        target.style.cursor = '';
        this.hoveredPlace.set(null);
        tooltipOverlay.setPosition(undefined);
        return;
      }

      const marker = this.map?.forEachFeatureAtPixel(event.pixel, (feature) => feature, {
        layerFilter: (layer) => layer === this.markerLayer,
        hitTolerance: 8,
      });

      target.style.cursor = marker ? 'pointer' : '';

      const placeId = marker?.get('placeId');
      const place = this.places().find((item) => item.id === placeId);

      this.hoveredPlace.set(place ?? null);

      if (marker && place) {
        const geometry = marker.getGeometry() as Point;
        tooltipOverlay.setPosition(geometry.getCoordinates());
      } else {
        tooltipOverlay.setPosition(undefined);
      }
    });

    this.map.on('singleclick', (event) => {
      const feature = this.map?.forEachFeatureAtPixel(event.pixel, (feature) => feature, {
        layerFilter: (layer) => layer === this.markerLayer,
      });

      this.service.selectPlace(feature?.get('placeId'));
    });
  }

  private updateMapMarkers(places: Place[]): void {
    this.markerSource.clear();

    const markers = places.map(
      (place) =>
        new Feature({
          geometry: new Point(fromLonLat([place.lng, place.lat])),
          placeId: place.id,
          name: place.name,
          position: place.position,
        }),
    );

    this.markerSource.addFeatures(markers);
  }

  ngOnDestroy(): void {
    this.map?.setTarget(undefined);
  }
}
