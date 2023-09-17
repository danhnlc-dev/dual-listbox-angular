import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlbSelectComponent } from './dlb-select.component';

describe('DlbSelectComponent', () => {
  let component: DlbSelectComponent;
  let fixture: ComponentFixture<DlbSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlbSelectComponent]
    });
    fixture = TestBed.createComponent(DlbSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
