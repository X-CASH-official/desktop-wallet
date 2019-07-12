import { FrmWizardModule } from './frm-wizard.module';

describe('FrmWizardModule', () => {
  let frmWizardModule: FrmWizardModule;

  beforeEach(() => {
    frmWizardModule = new FrmWizardModule();
  });

  it('should create an instance', () => {
    expect(frmWizardModule).toBeTruthy();
  });
});
