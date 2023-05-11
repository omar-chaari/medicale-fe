import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnelLayoutComponent } from './professionnel-layout.component';

describe('ProfessionnelLayoutComponent', () => {
  let component: ProfessionnelLayoutComponent;
  let fixture: ComponentFixture<ProfessionnelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionnelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionnelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
