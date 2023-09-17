import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlbOptionComponent } from './dlb-option.component';

describe('DlbOptionComponent', () => {
  let component: DlbOptionComponent;
  let fixture: ComponentFixture<DlbOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlbOptionComponent]
    });
    fixture = TestBed.createComponent(DlbOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
