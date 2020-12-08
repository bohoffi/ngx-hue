import { TestBed } from '@angular/core/testing';

import { NgxHueService } from './ngx-hue.service';

describe('NgxHueService', () => {
  let service: NgxHueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
