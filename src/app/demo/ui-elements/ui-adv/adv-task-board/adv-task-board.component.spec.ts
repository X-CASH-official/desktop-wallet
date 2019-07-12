import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTaskBoardComponent } from './adv-task-board.component';

describe('AdvTaskBoardComponent', () => {
  let component: AdvTaskBoardComponent;
  let fixture: ComponentFixture<AdvTaskBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvTaskBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvTaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
