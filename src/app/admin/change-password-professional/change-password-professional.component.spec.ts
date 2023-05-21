import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordProfessionalComponent } from './change-password-professional.component';

describe('ChangePasswordProfessionalComponent', () => {
  let component: ChangePasswordProfessionalComponent;
  let fixture: ComponentFixture<ChangePasswordProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
