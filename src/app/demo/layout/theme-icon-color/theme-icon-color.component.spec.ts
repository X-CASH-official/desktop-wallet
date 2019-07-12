import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeIconColorComponent } from './theme-icon-color.component';

describe('ThemeIconColorComponent', () => {
  let component: ThemeIconColorComponent;
  let fixture: ComponentFixture<ThemeIconColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeIconColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeIconColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
