import { TestBed } from '@angular/core/testing';

import { AuthProfessionnelService } from './auth-professionnel.service';

describe('AuthProfessionnelService', () => {
  let service: AuthProfessionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProfessionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
