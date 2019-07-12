import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavImageComponent } from './theme-nav-image.component';

describe('ThemeNavImageComponent', () => {
  let component: ThemeNavImageComponent;
  let fixture: ComponentFixture<ThemeNavImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNavImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
