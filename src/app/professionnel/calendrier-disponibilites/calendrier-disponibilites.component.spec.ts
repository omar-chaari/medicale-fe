import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites.component';

describe('CalendrierDisponibilitesComponent', () => {
  let component: CalendrierDisponibilitesComponent;
  let fixture: ComponentFixture<CalendrierDisponibilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierDisponibilitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierDisponibilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
