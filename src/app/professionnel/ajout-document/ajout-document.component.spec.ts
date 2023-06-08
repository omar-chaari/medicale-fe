import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDocumentComponent } from './ajout-document.component';

describe('AjoutDocumentComponent', () => {
  let component: AjoutDocumentComponent;
  let fixture: ComponentFixture<AjoutDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
