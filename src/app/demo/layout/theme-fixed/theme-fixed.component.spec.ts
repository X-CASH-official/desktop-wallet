import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFixedComponent } from './theme-fixed.component';

describe('ThemeFixedComponent', () => {
  let component: ThemeFixedComponent;
  let fixture: ComponentFixture<ThemeFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
