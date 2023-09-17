import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlbOptionsGroupComponent } from './dlb-options-group.component';

describe('DlbOptionsGroupComponent', () => {
  let component: DlbOptionsGroupComponent;
  let fixture: ComponentFixture<DlbOptionsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlbOptionsGroupComponent]
    });
    fixture = TestBed.createComponent(DlbOptionsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
