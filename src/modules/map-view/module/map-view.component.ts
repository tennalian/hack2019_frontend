import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { MapViewService } from './map-view.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Group } from '../models/groups.class';
import { PointsResponse, PointModel } from '../models/points.class';
import { Category } from '../models/categories.class';

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
  categories: Category[] = [];
  isListVisible = false;
  isCardVisible = false;
  loading = false;
  selectedPoint: PointModel = null;
  selectedGroup: Group = null;

  private unsubscribe = new Subject();

  constructor(
    private mapViewService: MapViewService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.mapId = this.mapViewService.mapId;
    this.mapViewService.fetchData()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data:[Category[], Group[]]) => {
        [ this.categories, this.groups ] = data;
        this.cdr.detectChanges();
      });
    this.mapViewService.markerClick
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((data: any) => {
      this.selectedPoint = data.markerData;
      this.showCard();
    })
  }

  onGroupSelect(group: Group) {
    this.hideCard();
    this.loading = true;
    this.cdr.detectChanges();
    this.selectedGroup = group;
    this.mapViewService.getPoints(group.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: PointsResponse) => {
        this.points = data.points;
        this.mapViewService.addPointsToMap(this.points);
        this.loading = false;
        this.cdr.detectChanges();
      });
  }

  onBtnClick() {
    this.isListVisible = !this.isListVisible;
    this.cdr.detectChanges();
  }

  showCard() {
    this.isCardVisible = true;
    this.cdr.detectChanges();
  }

  hideCard() {
    this.isCardVisible = false;
    console.log(this.isCardVisible)
    this.cdr.detectChanges();
  }
}
