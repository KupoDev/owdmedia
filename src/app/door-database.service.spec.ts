import { TestBed } from '@angular/core/testing';

import { DoorDatabaseService } from './door-database.service';

describe('DoorDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoorDatabaseService = TestBed.get(DoorDatabaseService);
    expect(service).toBeTruthy();
  });
});
