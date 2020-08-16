import { TestBed } from '@angular/core/testing';

import { LoginRegisterService } from './login-register.service';

describe('LoginService.ServiceService', () => {
  let service: LoginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
