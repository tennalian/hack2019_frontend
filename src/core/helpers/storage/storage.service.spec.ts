import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

let service: StorageService;

describe('[Core] Service: StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService
      ]
    });
    service = TestBed.get(StorageService);
  });

  afterEach(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.add', () => {
    it('should add item to localStorage and send key to public update stream', () => {
      let streamData = null;

      StorageService.updated.subscribe(data => streamData = data);
      service.add('some', 'value');

      expect(localStorage.getItem('some')).toEqual('"value"');
      expect(streamData).toEqual('some');
    });

    it('should not send key to public update stream when withoutUpdateEvent=true', () => {
      const withoutUpdateEvent = true;
      service.add('some-1', 'value', withoutUpdateEvent);

      let streamData = 'not updated';
      StorageService.updated.subscribe(data => streamData = data);

      expect(localStorage.getItem('some-1')).toEqual('"value"');
      expect(streamData).toEqual('not updated');
    });

    it('should not do anything without data', () => {
      service.add('some', undefined);

      let streamData = 'not updated';
      StorageService.updated.subscribe(data => streamData = data);

      expect(localStorage.getItem('some')).toEqual(null);
      expect(streamData).toEqual('not updated');
    });
  });

  describe('.get', () => {
    it('should return parsed item from localStorage', () => {
      localStorage.setItem('key-array', '[1, "2"]');
      localStorage.setItem('key-string', '"value"');

      expect(service.get('key-array')).toEqual([1, '2']);
      expect(service.get('key-string')).toEqual('value');
      expect(service.get('key-null')).toEqual(null);
    });
  });

  describe('.clean', () => {
    it('should clean localStorage', () => {
      localStorage.setItem('key-array', '[1, "2"]');
      localStorage.setItem('key-string', '"value"');

      expect(localStorage.length).toBe(2);

      service.clean();

      expect(localStorage.length).toBe(0);
    });
  });

});
