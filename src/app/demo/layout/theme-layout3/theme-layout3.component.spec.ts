import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout3Component } from './theme-layout3.component';

describe('ThemeLayout3Component', () => {
  let component: ThemeLayout3Component;
  let fixture: ComponentFixture<ThemeLayout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
