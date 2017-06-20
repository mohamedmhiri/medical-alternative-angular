import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDateComponent } from './patient-date.component';

describe('PatientDateComponent', () => {
  let component: PatientDateComponent;
  let fixture: ComponentFixture<PatientDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
