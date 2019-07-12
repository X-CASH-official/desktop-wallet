import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout4Component } from './theme-layout4.component';

describe('ThemeLayout4Component', () => {
  let component: ThemeLayout4Component;
  let fixture: ComponentFixture<ThemeLayout4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
