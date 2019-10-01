import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { create_reserve_proofComponent } from './create_reserve_proof.component';

describe('create_reserve_proofComponent', () => {
  let component: create_reserve_proofComponent;
  let fixture: ComponentFixture<create_reserve_proofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ create_reserve_proofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(create_reserve_proofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
