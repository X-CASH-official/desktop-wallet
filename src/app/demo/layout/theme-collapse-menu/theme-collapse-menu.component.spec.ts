import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCollapseMenuComponent } from './theme-collapse-menu.component';

describe('ThemeCollapseMenuComponent', () => {
  let component: ThemeCollapseMenuComponent;
  let fixture: ComponentFixture<ThemeCollapseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCollapseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCollapseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
