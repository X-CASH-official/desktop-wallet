import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { create_integrated_addressComponent } from './create_integrated_address.component';

describe('create_integrated_addressComponent', () => {
  let component: create_integrated_addressComponent;
  let fixture: ComponentFixture<create_integrated_addressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ create_integrated_addressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(create_integrated_addressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
