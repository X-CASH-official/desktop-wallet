import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameWalletModalComponent } from './rename-wallet-modal.component';

describe('RenameWalletModalComponent', () => {
  let component: RenameWalletModalComponent;
  let fixture: ComponentFixture<RenameWalletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameWalletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameWalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
