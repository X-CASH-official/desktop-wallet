import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvModalComponent } from './adv-modal.component';

describe('AdvModalComponent', () => {
  let component: AdvModalComponent;
  let fixture: ComponentFixture<AdvModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
