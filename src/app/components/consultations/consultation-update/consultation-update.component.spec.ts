import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationUpdateComponent } from './consultation-update.component';

describe('ConsultationUpdateComponent', () => {
  let component: ConsultationUpdateComponent;
  let fixture: ComponentFixture<ConsultationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
