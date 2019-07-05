import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { main_menuComponent } from './main_menu.component';

describe('main_menuComponent', () => {
  let component: main_menuComponent;
  let fixture: ComponentFixture<main_menuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ main_menuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(main_menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
