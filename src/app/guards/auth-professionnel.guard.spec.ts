import { TestBed } from '@angular/core/testing';

import { AuthProfessionnelGuard } from './auth-professionnel.guard';

describe('AuthProfessionnelGuard', () => {
  let guard: AuthProfessionnelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthProfessionnelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
