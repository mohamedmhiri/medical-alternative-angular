import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityUpdateComponent } from './availability-update.component';

describe('AvailabilityUpdateComponent', () => {
  let component: AvailabilityUpdateComponent;
  let fixture: ComponentFixture<AvailabilityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
