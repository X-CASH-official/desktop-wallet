import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { view_private_keysComponent } from './view_private_keys.component';

describe('view_private_keysComponent', () => {
  let component: view_private_keysComponent;
  let fixture: ComponentFixture<view_private_keysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ view_private_keysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(view_private_keysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
