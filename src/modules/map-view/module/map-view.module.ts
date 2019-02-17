import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapViewComponent } from './map-view.component';
import { MapViewService } from './map-view.service';
import { MapModule } from '../../map/module/map.module';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  imports: [
    CommonModule,
    MapModule
  ],
  entryComponents: [
  ],
  exports: [
    MapViewComponent,
    GroupsListComponent,
    ItemCardComponent
  ],
  declarations: [
    MapViewComponent,
    GroupsListComponent,
    ItemCardComponent
  ],
  providers: [
    MapViewService
  ],
})
export class MapView { }
