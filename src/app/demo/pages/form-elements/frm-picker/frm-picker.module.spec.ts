import { FrmPickerModule } from './frm-picker.module';

describe('FrmPickerModule', () => {
  let frmPickerModule: FrmPickerModule;

  beforeEach(() => {
    frmPickerModule = new FrmPickerModule();
  });

  it('should create an instance', () => {
    expect(frmPickerModule).toBeTruthy();
  });
});
