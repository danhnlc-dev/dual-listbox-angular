import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlbSearchComponent } from './dlb-search.component';

describe('DlbSearchComponent', () => {
  let component: DlbSearchComponent;
  let fixture: ComponentFixture<DlbSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlbSearchComponent]
    });
    fixture = TestBed.createComponent(DlbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
