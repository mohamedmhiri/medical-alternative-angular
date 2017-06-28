import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityDelComponent } from './availability-del.component';

describe('AvailabilityDelComponent', () => {
  let component: AvailabilityDelComponent;
  let fixture: ComponentFixture<AvailabilityDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
