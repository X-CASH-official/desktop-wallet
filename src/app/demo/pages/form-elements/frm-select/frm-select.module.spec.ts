import { FrmSelectModule } from './frm-select.module';

describe('FrmSelectModule', () => {
  let frmSelectModule: FrmSelectModule;

  beforeEach(() => {
    frmSelectModule = new FrmSelectModule();
  });

  it('should create an instance', () => {
    expect(frmSelectModule).toBeTruthy();
  });
});
