import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHueComponent } from './ngx-hue.component';

describe('NgxHueComponent', () => {
  let component: NgxHueComponent;
  let fixture: ComponentFixture<NgxHueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
