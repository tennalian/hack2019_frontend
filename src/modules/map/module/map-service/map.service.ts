import { Injectable } from '@angular/core';
import { FitBoundsOptions } from 'leaflet';

import { MapModel } from './map-model.class';
import { LeafletMap } from '../../models/leaflet-map.class';

@Injectable()
export class MapService {

  private mapsData = new Map<string, MapModel>();
  private mapResolvers = new Map<string, Function[]>();

  getMapModel(mapId: string): Promise<MapModel> {
    return new Promise(resolve => {
      const mapHasBeenResolved = this.mapResolvers.has(mapId) && !this.mapResolvers.get(mapId).length;
      const mapDataExist = this.mapsData.has(mapId);

      if (mapHasBeenResolved && mapDataExist) {
        return resolve(this.mapsData.get(mapId));
      }
      this.mapResolvers.set(mapId, [...(this.mapResolvers.get(mapId) || []), resolve]);
      return resolve(this.mapsData.get(mapId))
    })
    .then(() => this.mapsData.get(mapId));
  }

  set(mapId: string, mapModel: MapModel) {
    this.mapsData.set(mapId, mapModel);
    if (this.mapResolvers.has(mapId)) {
      this.mapResolvers.get(mapId).forEach(resolve => resolve(mapModel));
      this.mapResolvers.set(mapId, []);
    }
  }

  getMap(mapId: string): Promise<LeafletMap> {
    return this.getMapModel(mapId)
      .then(mapModel => mapModel.map);
  }

  unset(mapId: string) {
    if (this.mapsData.has(mapId)) {
      this.mapsData.get(mapId).destroy();
      this.mapsData.delete(mapId);
    }
  }

  setBoundsPadding(mapId: string, options: FitBoundsOptions) {
    this.mapsData.get(mapId).boundsPaddingOptions = options;
  }

  getBoundsPadding(mapId: string) {
    return this.mapsData.get(mapId).boundsPaddingOptions;
  }
}
