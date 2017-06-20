import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaMenuComponent } from './alpha-menu.component';

describe('AlphaMenuComponent', () => {
  let component: AlphaMenuComponent;
  let fixture: ComponentFixture<AlphaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
