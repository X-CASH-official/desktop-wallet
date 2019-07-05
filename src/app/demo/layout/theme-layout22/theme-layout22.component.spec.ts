import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout22Component } from './theme-layout22.component';

describe('ThemeLayout22Component', () => {
  let component: ThemeLayout22Component;
  let fixture: ComponentFixture<ThemeLayout22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
