import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';

import { PointModel } from '../../models/points.class';
import { Group } from '../../models/groups.class';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent implements OnInit {

  @Input() item: PointModel;
  @Input() group: Group;
  @Output() cardClose: EventEmitter<boolean> = new EventEmitter()

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  close() {
    this.cardClose.emit(true);
  }
}
