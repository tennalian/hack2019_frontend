import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { Group } from '../../models/groups.class';

@Component({
  selector: 'groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsListComponent {

  @Input() groups: Group[] = [];
  @Output() selectGroup: EventEmitter<Group> = new EventEmitter();

  activeGroupeId = null;

  constructor() {}

  onSelect(group: Group) {
    this.activeGroupeId = group.id;
    this.selectGroup.emit(group);
  }

  isActive(group: Group) {
    return this.activeGroupeId === group.id;
  }
}
