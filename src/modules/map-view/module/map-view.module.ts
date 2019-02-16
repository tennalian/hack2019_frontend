import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapViewComponent } from './map-view.component';
import { MapViewService } from './map-view.service';
import { MapModule } from '../../map/module/map.module';
import { GroupsListComponent } from './groups-list/groups-list.component';

@NgModule({
  imports: [
    CommonModule,
    MapModule
  ],
  entryComponents: [
  ],
  exports: [
    MapViewComponent,
    GroupsListComponent
  ],
  declarations: [
    MapViewComponent,
    GroupsListComponent
  ],
  providers: [
    MapViewService
  ],
})
export class MapView { }
