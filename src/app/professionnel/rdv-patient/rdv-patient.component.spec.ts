import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvPatientComponent } from './rdv-patient.component';

describe('RdvPatientComponent', () => {
  let component: RdvPatientComponent;
  let fixture: ComponentFixture<RdvPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
