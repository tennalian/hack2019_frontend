import { NgModuleFactoryLoader, Injectable, Compiler, Optional, Injector, NgModuleFactory } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { isEqual } from 'lodash';

class MediatorEvent {
  constructor(public name: string, public data: any) { }
}

class WatcherData<M, S> {
  module: M;
  service: S;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalMediator {

  private static asyncModuleLoadingStream = new Subject<boolean>();
  private static eventsStream: Subject<MediatorEvent> = new Subject<MediatorEvent>();
  private static watcherServices: WatcherData<any, any>[] = [];

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector,
    @Optional() private compiler: Compiler
  ) { }

  static get asyncModuleLoading() {
    return this.asyncModuleLoadingStream.asObservable();
  }

  static registerLazyService<M, S>(module: M, service: S) {
    this.watcherServices.push({ module, service });
  }

  static lazyServices(moduleType: any) {
    return this.watcherServices
      .filter(watcher => isEqual(watcher.module, moduleType));
  }

  static emit(eventName: string, data?: any) {
    this.eventsStream.next(new MediatorEvent(eventName, data));
  }

  static listen(eventName: string) {
    return this.eventSubject(eventName);
  }

  private static eventSubject(eventName: string) {
    return this.eventsStream.pipe(
      filter((event: MediatorEvent) => event.name === eventName),
      map((event: MediatorEvent) => event.data)
    );
  }

  async emitToModule(modulePath: string, command: string, data: any) {
    GlobalMediator.asyncModuleLoadingStream.next(true);

    let moduleFactory = await this.loader.load(modulePath);

    if (!(moduleFactory instanceof NgModuleFactory)) {
      moduleFactory = await this.compiler.compileModuleAsync(moduleFactory);
    }

    const moduleRef = moduleFactory.create(this.injector);

    GlobalMediator.asyncModuleLoadingStream.next(false);
    GlobalMediator.lazyServices(moduleFactory.moduleType).map(watcher => moduleRef.injector.get(watcher.service));
    GlobalMediator.emit(command, data);
  }

}
