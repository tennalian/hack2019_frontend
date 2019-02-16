import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from 'src/modules/map-view/module/map-view.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapViewComponent,
  }, {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: 'map',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
