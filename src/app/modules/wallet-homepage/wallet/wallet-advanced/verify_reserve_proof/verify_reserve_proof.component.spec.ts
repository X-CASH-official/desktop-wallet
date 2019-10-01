import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { verify_reserve_proofComponent } from './verify_reserve_proof.component';

describe('verify_reserve_proofComponent', () => {
  let component: verify_reserve_proofComponent;
  let fixture: ComponentFixture<verify_reserve_proofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ verify_reserve_proofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(verify_reserve_proofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
