import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDelComponent } from './test-del.component';

describe('TestDelComponent', () => {
  let component: TestDelComponent;
  let fixture: ComponentFixture<TestDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
