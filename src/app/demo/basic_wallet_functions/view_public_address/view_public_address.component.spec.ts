import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { view_public_addressComponent } from './view_public_address.component';

describe('view_public_addressComponent', () => {
  let component: view_public_addressComponent;
  let fixture: ComponentFixture<view_public_addressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ view_public_addressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(view_public_addressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
