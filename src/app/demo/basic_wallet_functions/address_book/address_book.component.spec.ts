import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { address_bookComponent } from './address_book.component';

describe('address_bookComponent', () => {
  let component: address_bookComponent;
  let fixture: ComponentFixture<address_bookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ address_bookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(address_bookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
