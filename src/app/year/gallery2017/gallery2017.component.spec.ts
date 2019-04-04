import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2017Component } from './gallery2017.component';

describe('Gallery2017Component', () => {
  let component: Gallery2017Component;
  let fixture: ComponentFixture<Gallery2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
