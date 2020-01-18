import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportWalletModalComponent } from './import-wallet-modal.component';

describe('ImportWalletModalComponent', () => {
  let component: ImportWalletModalComponent;
  let fixture: ComponentFixture<ImportWalletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportWalletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportWalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
