import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordPatientComponent } from './change-password-patient.component';

describe('ChangePasswordPatientComponent', () => {
  let component: ChangePasswordPatientComponent;
  let fixture: ComponentFixture<ChangePasswordPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
