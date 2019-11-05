import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactModalComponent } from './add-contact-modal.component';

describe('ContactsHeaderComponent', () => {
  let component: AddContactModalComponent;
  let fixture: ComponentFixture<AddContactModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
