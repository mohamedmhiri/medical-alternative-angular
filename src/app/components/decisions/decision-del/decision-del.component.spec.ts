import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionDelComponent } from './decision-del.component';

describe('DecisionDelComponent', () => {
  let component: DecisionDelComponent;
  let fixture: ComponentFixture<DecisionDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
