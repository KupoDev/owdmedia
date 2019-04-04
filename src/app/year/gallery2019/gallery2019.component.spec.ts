import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2019Component } from './gallery2019.component';

describe('Gallery2019Component', () => {
  let component: Gallery2019Component;
  let fixture: ComponentFixture<Gallery2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
