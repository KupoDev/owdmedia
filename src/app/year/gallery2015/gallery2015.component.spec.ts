import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2015Component } from './gallery2015.component';

describe('Gallery2015Component', () => {
  let component: Gallery2015Component;
  let fixture: ComponentFixture<Gallery2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
