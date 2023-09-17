import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlbContactComponent } from './dlb-contact.component';

describe('DlbContactComponent', () => {
  let component: DlbContactComponent;
  let fixture: ComponentFixture<DlbContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlbContactComponent]
    });
    fixture = TestBed.createComponent(DlbContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
