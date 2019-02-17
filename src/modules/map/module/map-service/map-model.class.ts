import { isEmpty, first } from 'lodash';
import { Map, TileLayer, FitBoundsOptions, Control, MapOptions } from 'leaflet';
import { Subject } from 'rxjs';

import { MapCenter, MapZoom, MapBaseLayers } from '../../models/map-options.class';

const PREFIX = `<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>`;

const LAYERS = {
  // sputnik: {
  //   name: 'sputnik',
  //   title: '«Спутник»',
  //   type: 'xyz',
  //   url: 'http://tiles.maps.sputnik.ru/tiles/kmt2/{z}/{x}/{y}.png'
  // },
  osm: {
    name: 'osm',
    title: 'Open Street Map',
    type: 'xyz',
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }
};

export class MapModel {

  boundsPaddingOptions: FitBoundsOptions = {};
  get layerChange() {
    return this.layerChangeStream.asObservable();
  }

  private center: MapCenter;
  private defaults: MapZoom;
  private layers: MapBaseLayers = new MapBaseLayers();
  private tileLayer: TileLayer;
  private mapInstance: Map;
  private layerChangeStream = new Subject<string>();

  constructor() {
    this.layers = {
      ...this.layers,
      baselayers: {
        sputnik: LAYERS.osm
      }
    };

    this.center = {
      lat: 56.31436833,
      lng: 43.993575,
      zoom: 5
    };

    this.defaults = {
      zoomControl: false,
      maxZoom: 18,
      minZoom: 3
    };
  }

  definedLayers() {
    return LAYERS;
  }

  toggleLayer(layer: string) {
    if (LAYERS[layer]) {
      this.layers.baselayers = {};
      this.layers.baselayers[layer] = LAYERS[layer];

      if (this.mapInstance) {
        this.mapInstance.removeLayer(this.tileLayer);
        this.tileLayer = new TileLayer(this.layers.baselayers[layer].url);
        this.tileLayer.addTo(this.mapInstance);
        this.layerChangeStream.next(layer);
      }
    }
  }

  isActiveLayer(layer: string): boolean {
    return !!this.layers.baselayers[layer];
  }

  async initalize(id: string) {
    try {
      const map = await this.createMap(id);
      if (!isEmpty(map)) {
        new Control.Zoom({
          position: 'topright'
        }).addTo(map);
        new Control.Scale({
          position: 'bottomright',
          maxWidth: 150,
          imperial: false
        }).addTo(map);

        map.setMaxBounds([[180, 180], [-180, -180]]);
        // map.attributionControl.setPrefix(PREFIX);

        this.mapInstance = map;
        return this.mapInstance;
      }
    } catch (e) { }
  }

  invalidateSize() {
    setTimeout(() => this.mapInstance.invalidateSize());
  }

  destroy() {
    this.mapInstance.remove();
  }

  createMap(mapId: string) {
    return new Promise<Map>((resolve, reject) => {
      if (!mapId) {
        reject('Missing map id');
      }
      const center = {
        zoom: this.center.zoom,
        center: [this.center.lat, this.center.lng]
      };
      this.tileLayer = new TileLayer(this.layers.baselayers.sputnik.url);
      let map: Map;

      try {
        map = new Map(mapId, { ...center, ...this.defaults } as MapOptions);
      } catch (e) {
        reject(e);
      }

      this.tileLayer.addTo(map);
      resolve(map);
    });
  }

  get activeLayerName() {
    return first(Object.keys(this.layers.baselayers));
  }

  get map() {
    return this.mapInstance;
  }
}
