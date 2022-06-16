import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedecinComponent } from './show-medecin.component';

describe('ShowMedecinComponent', () => {
  let component: ShowMedecinComponent;
  let fixture: ComponentFixture<ShowMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
