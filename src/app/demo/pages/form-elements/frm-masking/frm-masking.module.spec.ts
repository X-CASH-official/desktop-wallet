import { FrmMaskingModule } from './frm-masking.module';

describe('FrmMaskingModule', () => {
  let frmMaskingModule: FrmMaskingModule;

  beforeEach(() => {
    frmMaskingModule = new FrmMaskingModule();
  });

  it('should create an instance', () => {
    expect(frmMaskingModule).toBeTruthy();
  });
});
