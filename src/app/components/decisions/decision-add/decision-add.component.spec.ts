import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionAddComponent } from './decision-add.component';

describe('DecisionAddComponent', () => {
  let component: DecisionAddComponent;
  let fixture: ComponentFixture<DecisionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
