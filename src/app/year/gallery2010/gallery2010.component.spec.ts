import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2010Component } from './gallery2010.component';

describe('Gallery2010Component', () => {
  let component: Gallery2010Component;
  let fixture: ComponentFixture<Gallery2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
