import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MapService } from '../../map/module/map-service/map.service';
import { ENDPOINTS } from 'src/api/endpoints';
import { endpoint } from 'src/api/endpoint/endpoint.service';
import { LayerGroup, Marker, DivIcon } from 'leaflet';
import { Subject } from 'rxjs';
import { cloneDeep, map, chain, size } from 'lodash';
import { PointModel } from '../models/points.class';

@Injectable()
export class MapViewService {

  outletsLayer: LayerGroup = new LayerGroup();
  markers: Marker[] = [];
  markerClick = new Subject();

  constructor(
    private http: HttpClient,
    private mapService: MapService,
    private zone: NgZone
  ) {}

  get mapId() {
    return 'map-view';
  }

  getGroups() {
    return this.http.get(ENDPOINTS.GROUPS);
  }

  getPoints(id: string) {
    return this.http.get(endpoint(ENDPOINTS.POINTS, {groupId: id}));
  }

  marker(markerData: PointModel): Marker {
    const icon = new DivIcon({className: 'map-div-icon'});
    const markerOptions = {
      icon,
      markerData,
    };
    const coords = {
      lat: markerData.latitude,
      lng: markerData.longitude
    };

    return new Marker(coords, markerOptions)
      .addEventListener('click', event =>
        this.zone.run(() => this.markerClick.next({
          mapId: event.target['_mapToAdd'].getContainer().id,
          markerData: event.target.options.markerData
        })
      ));
  }

  async addPointsToMap(points: PointModel[]) {
     const lmap = await this.mapService.getMap(this.mapId);

    this.outletsLayer.removeFrom(lmap);
    this.outletsLayer = new LayerGroup();
    this.markers = cloneDeep(points).map(point => {
      const marker = this.marker(point);
      this.outletsLayer.addLayer(marker);
      return marker;
    });
    console.log(this.markers)
    this.outletsLayer.addTo(lmap);
    this.fitBounds();
  }

  private async fitBounds() {
    const lmap = await this.mapService.getMap(this.mapId);
    const mapModel = await this.mapService.getMapModel(this.mapId);
    // const coords = chain(this.territoriesMapState)
    //   .map(data => data.polygon.getLatLngs())
    //   .flattenDeep()
    //   .value();

    const coords = map(this.markers, m => {
      return m.getLatLng();
    });
    console.log(coords)

    return size(coords) && lmap.fitBounds(coords as any, mapModel.boundsPaddingOptions);
  }
}
