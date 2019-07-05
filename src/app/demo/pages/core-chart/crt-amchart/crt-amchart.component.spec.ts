import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtAmchartComponent } from './crt-amchart.component';

describe('CrtAmchartComponent', () => {
  let component: CrtAmchartComponent;
  let fixture: ComponentFixture<CrtAmchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtAmchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtAmchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
