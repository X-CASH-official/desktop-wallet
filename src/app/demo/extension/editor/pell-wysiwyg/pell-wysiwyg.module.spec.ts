import { PellWysiwygModule } from './pell-wysiwyg.module';

describe('PellWysiwygModule', () => {
  let pellWysiwygModule: PellWysiwygModule;

  beforeEach(() => {
    pellWysiwygModule = new PellWysiwygModule();
  });

  it('should create an instance', () => {
    expect(pellWysiwygModule).toBeTruthy();
  });
});
