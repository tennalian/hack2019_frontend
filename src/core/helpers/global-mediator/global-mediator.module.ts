import { NgModule } from '@angular/core';

import { GlobalMediator } from './global-mediator.service';

@NgModule({
  providers: [
    GlobalMediator
  ]
})
export class GlobalMediatorModule { }
