import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDarkComponent } from './theme-dark.component';

describe('ThemeDarkComponent', () => {
  let component: ThemeDarkComponent;
  let fixture: ComponentFixture<ThemeDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
