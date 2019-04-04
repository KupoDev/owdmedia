import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2013Component } from './gallery2013.component';

describe('Gallery2013Component', () => {
  let component: Gallery2013Component;
  let fixture: ComponentFixture<Gallery2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
