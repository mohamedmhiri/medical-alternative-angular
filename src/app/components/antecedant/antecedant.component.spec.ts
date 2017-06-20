import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedantComponent } from './antecedant.component';

describe('AntecedantComponent', () => {
  let component: AntecedantComponent;
  let fixture: ComponentFixture<AntecedantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
