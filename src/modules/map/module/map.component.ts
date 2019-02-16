import { Component, Input, OnDestroy, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GlobalMediator } from 'src/core/helpers/global-mediator/global-mediator.service';
import { StorageService } from 'src/core/helpers/storage/storage.service';

import { MapService } from './map-service/map.service';
import { MapModel } from './map-service/map-model.class';

const activeTilesLayers = 'mapActiveTilesLayers';
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  private unsubscribe = new Subject();

  @Input() mapId: string;

  constructor(
    private mapService: MapService,
    private storage: StorageService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    GlobalMediator.listen('AppShell:contentSizeChanged')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.invalidateMapSize());
  }

  ngAfterViewInit() {
    const mapModel = new MapModel();
    this.zone.runOutsideAngular(async () => {
      await mapModel.initalize(this.mapId);
      this.mapService.set(this.mapId, mapModel);
      this.setSavedTileLayer(mapModel);
      mapModel.map.invalidateSize();
      mapModel.layerChange
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(layerName => this.saveActiveTileLayer(layerName));
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.mapService.unset(this.mapId);
  }

  private async invalidateMapSize() {
    const map = await this.mapService.getMap(this.mapId);
    map.invalidateSize();
  }

  private setSavedTileLayer(mapModel: MapModel) {
    const savedTilesLayers = this.storage.get(activeTilesLayers);

    if (savedTilesLayers && savedTilesLayers[this.mapId]) {
      mapModel.toggleLayer(savedTilesLayers[this.mapId]);
      return;
    }

    this.saveActiveTileLayer(mapModel.activeLayerName);
  }

  private saveActiveTileLayer(layerName: string) {
    const savedTilesLayers = this.storage.get(activeTilesLayers);
    const newSavedTilesLayers = {...(savedTilesLayers || {}), [this.mapId]: layerName };
    this.storage.add(activeTilesLayers, newSavedTilesLayers);
  }
}
