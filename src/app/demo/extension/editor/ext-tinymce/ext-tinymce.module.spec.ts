import { ExtTinymceModule } from './ext-tinymce.module';

describe('ExtTinymceModule', () => {
  let extTinymceModule: ExtTinymceModule;

  beforeEach(() => {
    extTinymceModule = new ExtTinymceModule();
  });

  it('should create an instance', () => {
    expect(extTinymceModule).toBeTruthy();
  });
});
