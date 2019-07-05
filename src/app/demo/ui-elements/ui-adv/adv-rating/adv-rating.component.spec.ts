import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvRatingComponent } from './adv-rating.component';

describe('AdvRatingComponent', () => {
  let component: AdvRatingComponent;
  let fixture: ComponentFixture<AdvRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
