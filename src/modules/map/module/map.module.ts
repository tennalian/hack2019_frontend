import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StorageService } from 'src/core/helpers/storage/storage.service';

import { MapComponent } from './map.component';
import { MapService } from './map-service/map.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MapComponent,
  ],
  declarations: [
    MapComponent
  ],
  providers: [
    MapService,
    StorageService
  ]
})
export class MapModule { }
