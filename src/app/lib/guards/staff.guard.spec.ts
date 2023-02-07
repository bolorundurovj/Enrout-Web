import { TestBed } from '@angular/core/testing';

import { StaffGuard } from './staff.guard';

describe('StaffGuard', () => {
  let guard: StaffGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
