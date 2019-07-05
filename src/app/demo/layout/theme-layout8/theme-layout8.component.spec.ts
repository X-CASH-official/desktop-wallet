import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout8Component } from './theme-layout8.component';

describe('ThemeLayout8Component', () => {
  let component: ThemeLayout8Component;
  let fixture: ComponentFixture<ThemeLayout8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
