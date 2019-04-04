import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldWorldComponent } from './old-world.component';

describe('OldWorldComponent', () => {
  let component: OldWorldComponent;
  let fixture: ComponentFixture<OldWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
