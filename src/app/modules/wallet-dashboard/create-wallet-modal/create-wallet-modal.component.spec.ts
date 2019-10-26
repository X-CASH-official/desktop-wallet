import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWalletModalComponent } from './create-wallet-modal.component';

describe('CreateWalletModalComponent', () => {
  let component: CreateWalletModalComponent;
  let fixture: ComponentFixture<CreateWalletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWalletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
