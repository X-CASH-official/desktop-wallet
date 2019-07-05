import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout5vComponent } from './theme-layout5v.component';

describe('ThemeLayout5vComponent', () => {
  let component: ThemeLayout5vComponent;
  let fixture: ComponentFixture<ThemeLayout5vComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout5vComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout5vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
