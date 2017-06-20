import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDelComponent } from './patient-del.component';

describe('PatientDelComponent', () => {
  let component: PatientDelComponent;
  let fixture: ComponentFixture<PatientDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
