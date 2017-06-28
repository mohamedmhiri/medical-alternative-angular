import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentAddComponent } from './treatment-add.component';

describe('TreatmentAddComponent', () => {
  let component: TreatmentAddComponent;
  let fixture: ComponentFixture<TreatmentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
