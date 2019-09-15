import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { create_sub_addressComponent } from './create_sub_address.component';

describe('create_sub_addressComponent', () => {
  let component: create_sub_addressComponent;
  let fixture: ComponentFixture<create_sub_addressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ create_sub_addressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(create_sub_addressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
