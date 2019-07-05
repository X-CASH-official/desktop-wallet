import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblSearchingComponent } from './tbl-searching.component';

describe('TblSearchingComponent', () => {
  let component: TblSearchingComponent;
  let fixture: ComponentFixture<TblSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
