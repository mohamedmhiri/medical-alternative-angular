import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDelComponent } from './appointment-del.component';

describe('AppointmentDelComponent', () => {
  let component: AppointmentDelComponent;
  let fixture: ComponentFixture<AppointmentDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
