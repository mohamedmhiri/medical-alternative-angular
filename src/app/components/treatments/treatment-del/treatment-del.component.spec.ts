import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentDelComponent } from './treatment-del.component';

describe('TreatmentDelComponent', () => {
  let component: TreatmentDelComponent;
  let fixture: ComponentFixture<TreatmentDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
