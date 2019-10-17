import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWalletModalComponent } from './delete-wallet-modal.component';

describe('DeleteWalletModalComponent', () => {
  let component: DeleteWalletModalComponent;
  let fixture: ComponentFixture<DeleteWalletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWalletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
