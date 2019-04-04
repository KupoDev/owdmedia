import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2014Component } from './gallery2014.component';

describe('Gallery2014Component', () => {
  let component: Gallery2014Component;
  let fixture: ComponentFixture<Gallery2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
