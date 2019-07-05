import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgetStatisticComponent } from './wget-statistic.component';

describe('WgetStatisticComponent', () => {
  let component: WgetStatisticComponent;
  let fixture: ComponentFixture<WgetStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgetStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgetStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
