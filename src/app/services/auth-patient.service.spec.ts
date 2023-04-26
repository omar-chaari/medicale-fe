import { TestBed } from '@angular/core/testing';

import { AuthPatientService } from './auth-patient.service';

describe('AuthPatientService', () => {
  let service: AuthPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
