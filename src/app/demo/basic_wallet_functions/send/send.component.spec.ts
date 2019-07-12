import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sendComponent } from './send.component';

describe('sendComponent', () => {
  let component: sendComponent;
  let fixture: ComponentFixture<sendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
