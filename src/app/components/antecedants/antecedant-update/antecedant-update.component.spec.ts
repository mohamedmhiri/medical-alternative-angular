import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedantUpdateComponent } from './antecedant-update.component';

describe('AntecedantUpdateComponent', () => {
  let component: AntecedantUpdateComponent;
  let fixture: ComponentFixture<AntecedantUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedantUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
