import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowProComponent } from './show-pro.component';

describe('ShowProComponent', () => {
  let component: ShowProComponent;
  let fixture: ComponentFixture<ShowProComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
