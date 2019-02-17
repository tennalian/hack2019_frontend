import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';

import { PointModel } from '../../models/points.class';
import { Group } from '../../models/groups.class';
import { CategoriesTypes } from '../../models/categories.class';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent implements OnInit {

  @Input() item: PointModel;
  @Input() group: Group;
  @Output() cardClose: EventEmitter<boolean> = new EventEmitter();
  colorClass = '';

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.colorClass = this.item.category === CategoriesTypes.positive ?
                      'marker-card__header--postiive' :
                      'marker-card__header--negative';
  }

  close() {
    this.cardClose.emit(true);
  }
}
