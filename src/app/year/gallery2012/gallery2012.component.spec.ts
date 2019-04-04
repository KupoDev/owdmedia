import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2012Component } from './gallery2012.component';

describe('Gallery2012Component', () => {
  let component: Gallery2012Component;
  let fixture: ComponentFixture<Gallery2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
