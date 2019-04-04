import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2016Component } from './gallery2016.component';

describe('Gallery2016Component', () => {
  let component: Gallery2016Component;
  let fixture: ComponentFixture<Gallery2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
