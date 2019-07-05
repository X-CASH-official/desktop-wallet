import { FrmAdvanceModule } from './frm-advance.module';

describe('FrmAdvanceModule', () => {
  let frmAdvanceModule: FrmAdvanceModule;

  beforeEach(() => {
    frmAdvanceModule = new FrmAdvanceModule();
  });

  it('should create an instance', () => {
    expect(frmAdvanceModule).toBeTruthy();
  });
});
