import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineChatComponent } from './inline-chat.component';

describe('InlineChatComponent', () => {
  let component: InlineChatComponent;
  let fixture: ComponentFixture<InlineChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
