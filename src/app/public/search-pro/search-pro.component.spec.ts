import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchProComponent } from './search-pro.component';

describe('SearchProComponent', () => {
  let component: SearchProComponent;
  let fixture: ComponentFixture<SearchProComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
