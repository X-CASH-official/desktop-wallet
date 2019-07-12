import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgetDataComponent } from './wget-data.component';

describe('WgetDataComponent', () => {
  let component: WgetDataComponent;
  let fixture: ComponentFixture<WgetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
