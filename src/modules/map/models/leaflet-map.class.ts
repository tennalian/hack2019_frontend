import { Map } from 'leaflet';

export abstract class LeafletMap extends Map {
  attributionControl?: {
    setPrefix: (prefix: string) => void;
  };
}
