import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsultationComponent } from './delete-consultation.component';

describe('DeleteConsultationComponent', () => {
  let component: DeleteConsultationComponent;
  let fixture: ComponentFixture<DeleteConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
