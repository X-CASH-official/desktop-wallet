import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDatatableComponent } from './tbl-datatable.component';

describe('TblDatatableComponent', () => {
  let component: TblDatatableComponent;
  let fixture: ComponentFixture<TblDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
