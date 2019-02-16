import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

import { Group } from '../../models/groups.class';

@Component({
  selector: 'groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsListComponent {

  @Input() groups: Group[] = [];
  @Output() selectGroup: EventEmitter<string> = new EventEmitter();

  activeGroupeId = null;

  onSelect(group: Group) {
    this.activeGroupeId = group.id;
    this.selectGroup.emit(this.activeGroupeId);
  }
}
