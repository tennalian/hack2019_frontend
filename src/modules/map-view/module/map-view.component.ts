import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { MapViewService } from './map-view.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GroupResponse, Group } from '../models/groups.class';
import { PointsResponse, PointModel } from '../models/points.class';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapViewComponent implements OnInit {

  mapId: string;
  groups: Group[] = [];
  points: PointModel[] = [];

  private unsubscribe = new Subject();

  constructor(
    private mapViewService: MapViewService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.mapId = this.mapViewService.mapId;
    this.mapViewService.getGroups()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: GroupResponse) => {
        this.groups = data.groups;
        this.cdr.detectChanges();
      });
    this.mapViewService.markerClick
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(data => {
      console.log(data)
    })
  }

  onGroupSelect(id: string) {
    this.mapViewService.getPoints(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: PointsResponse) => {
        this.points = data.points;
        this.mapViewService.addPointsToMap(this.points);
      });
  }
}
