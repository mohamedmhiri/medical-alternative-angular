import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAddComponent } from './consultation-add.component';

describe('ConsultationAddComponent', () => {
  let component: ConsultationAddComponent;
  let fixture: ComponentFixture<ConsultationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
