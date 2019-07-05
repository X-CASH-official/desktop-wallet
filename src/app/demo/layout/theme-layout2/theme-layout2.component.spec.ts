import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout2Component } from './theme-layout2.component';

describe('ThemeLayout2Component', () => {
  let component: ThemeLayout2Component;
  let fixture: ComponentFixture<ThemeLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
