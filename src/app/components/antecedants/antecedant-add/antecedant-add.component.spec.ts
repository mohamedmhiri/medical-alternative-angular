import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedantAddComponent } from './antecedant-add.component';

describe('AntecedantAddComponent', () => {
  let component: AntecedantAddComponent;
  let fixture: ComponentFixture<AntecedantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
