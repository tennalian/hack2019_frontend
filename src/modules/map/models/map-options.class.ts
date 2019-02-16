class MapEventOption {
  enable: string[];
  logic?: string;
}

export class MapLayer {
  name: string;
  title: string;
  type: string;
  url: string;
}

export class MapLayers {
  [layer: string]: MapLayer
}

export class MapEvents {
  map: MapEventOption;
  path: MapEventOption;
  markers: MapEventOption;
}

export class MapCenter {
  lat: number;
  lng: number;
  zoom: number;
}

export class MapZoom {
  maxZoom: number;
  minZoom: number;
  zoomControl?: boolean;
}

export class MapBaseLayers {
  baselayers: MapLayers;
}
