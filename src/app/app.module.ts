import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapView } from 'src/modules/map-view/module/map-view.module';
import { AppRoutingModule } from './app-routing.module';
import { MapService } from 'src/modules/map/module/map-service/map.service';
import { StorageService } from 'src/core/helpers/storage/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapView,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    MapService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
