import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionUpdateComponent } from './decision-update.component';

describe('DecisionUpdateComponent', () => {
  let component: DecisionUpdateComponent;
  let fixture: ComponentFixture<DecisionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
