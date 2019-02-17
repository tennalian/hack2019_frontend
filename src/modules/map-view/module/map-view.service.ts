import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map as observableMap } from 'rxjs/operators';
import { Subject, of, forkJoin } from 'rxjs';
import { LayerGroup, Marker, DivIcon } from 'leaflet';
import { cloneDeep, map, size } from 'lodash';

import { ENDPOINTS } from 'src/api/endpoints';
import { endpoint } from 'src/api/endpoint/endpoint.service';

import { PointModel } from '../models/points.class';
import { CategoryResponse, CategoriesTypes } from '../models/categories.class';
import { GroupResponse } from '../models/groups.class';
import { MapService } from '../../map/module/map-service/map.service';

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
    return this.http.get(ENDPOINTS.GROUPS)
    .pipe(
      catchError(() => of({groups: []})),
      observableMap((response: GroupResponse) => response.groups)
    );
  }

  getPoints(id: string) {
    return this.http.get(endpoint(ENDPOINTS.POINTS, {groupId: id}));
  }

  getCategories() {
    return this.http.get(ENDPOINTS.CATEGORIES)
      .pipe(
        catchError(() => of({categories: []})),
        observableMap((response: CategoryResponse) => response.categories)
      );
  }

  fetchData() {
    return forkJoin(this.getCategories(), this.getGroups())
  }

  marker(markerData: PointModel): Marker {
    const colorClass = markerData.category === CategoriesTypes.positive ? 'map-div-icon--postiive' : 'map-div-icon--negative';
    const icon = new DivIcon({
      className: `map-div-icon ${colorClass}`,
      iconSize: [20, 20]

    });
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
    this.outletsLayer.addTo(lmap);
    this.fitBounds();
  }

  private async fitBounds() {
    const lmap = await this.mapService.getMap(this.mapId);
    const mapModel = await this.mapService.getMapModel(this.mapId);
    const coords = map(this.markers, m => {
      return m.getLatLng();
    });
    return size(coords) && lmap.fitBounds(coords as any, mapModel.boundsPaddingOptions);
  }
}
