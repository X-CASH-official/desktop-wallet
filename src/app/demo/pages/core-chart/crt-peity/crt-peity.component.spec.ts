import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtPeityComponent } from './crt-peity.component';

describe('CrtPeityComponent', () => {
  let component: CrtPeityComponent;
  let fixture: ComponentFixture<CrtPeityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtPeityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtPeityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
