import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfessionnelComponent } from './login-professionnel.component';

describe('LoginProfessionnelComponent', () => {
  let component: LoginProfessionnelComponent;
  let fixture: ComponentFixture<LoginProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProfessionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
