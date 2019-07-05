import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBoxComponent } from './theme-box.component';

describe('ThemeBoxComponent', () => {
  let component: ThemeBoxComponent;
  let fixture: ComponentFixture<ThemeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
