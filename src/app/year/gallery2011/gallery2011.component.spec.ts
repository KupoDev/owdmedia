import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2011Component } from './gallery2011.component';

describe('Gallery2011Component', () => {
  let component: Gallery2011Component;
  let fixture: ComponentFixture<Gallery2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
