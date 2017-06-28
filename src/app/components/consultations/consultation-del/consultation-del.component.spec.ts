import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDelComponent } from './consultation-del.component';

describe('ConsultationDelComponent', () => {
  let component: ConsultationDelComponent;
  let fixture: ComponentFixture<ConsultationDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
