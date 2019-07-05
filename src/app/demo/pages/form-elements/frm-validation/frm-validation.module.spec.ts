import { FrmValidationModule } from './frm-validation.module';

describe('FrmValidationModule', () => {
  let frmValidationModule: FrmValidationModule;

  beforeEach(() => {
    frmValidationModule = new FrmValidationModule();
  });

  it('should create an instance', () => {
    expect(frmValidationModule).toBeTruthy();
  });
});
