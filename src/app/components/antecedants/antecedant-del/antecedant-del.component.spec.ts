import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedantDelComponent } from './antecedant-del.component';

describe('AntecedantDelComponent', () => {
  let component: AntecedantDelComponent;
  let fixture: ComponentFixture<AntecedantDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedantDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedantDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
