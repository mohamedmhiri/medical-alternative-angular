import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentUpdateComponent } from './treatment-update.component';

describe('TreatmentUpdateComponent', () => {
  let component: TreatmentUpdateComponent;
  let fixture: ComponentFixture<TreatmentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
