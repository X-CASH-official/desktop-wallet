import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgetTableComponent } from './wget-table.component';

describe('WgetTableComponent', () => {
  let component: WgetTableComponent;
  let fixture: ComponentFixture<WgetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
