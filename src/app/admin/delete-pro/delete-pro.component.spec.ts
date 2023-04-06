import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteProComponent } from './delete-pro.component';

describe('DeleteProComponent', () => {
  let component: DeleteProComponent;
  let fixture: ComponentFixture<DeleteProComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
