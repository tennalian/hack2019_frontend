import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { isUndefined } from 'lodash';

@Injectable()
export class StorageService {

  static updated = new Subject<any>();

  add(key: string, data: any, withoutUpdateEvent?: boolean) {
    if (!isUndefined(data)) {
      localStorage.setItem(key, JSON.stringify(data));
      if (!withoutUpdateEvent) {
        StorageService.updated.next(key);
      }
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error(`[Storage] Error parsing key ${key}`);
    }
  }

  clean() {
    localStorage.clear();
  }
}
