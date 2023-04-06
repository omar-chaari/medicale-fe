import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProfessionalComponent } from './add-professional.component';

describe('AddProfessionalComponent', () => {
  let component: AddProfessionalComponent;
  let fixture: ComponentFixture<AddProfessionalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
