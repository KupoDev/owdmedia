import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2018Component } from './gallery2018.component';

describe('Gallery2018Component', () => {
  let component: Gallery2018Component;
  let fixture: ComponentFixture<Gallery2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
