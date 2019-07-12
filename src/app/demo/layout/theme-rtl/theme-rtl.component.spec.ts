import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeRtlComponent } from './theme-rtl.component';

describe('ThemeRtlComponent', () => {
  let component: ThemeRtlComponent;
  let fixture: ComponentFixture<ThemeRtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeRtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
