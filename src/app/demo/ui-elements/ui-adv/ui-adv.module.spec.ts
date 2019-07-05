import { UiAdvModule } from './ui-adv.module';

describe('UiAdvModule', () => {
  let uiAdvModule: UiAdvModule;

  beforeEach(() => {
    uiAdvModule = new UiAdvModule();
  });

  it('should create an instance', () => {
    expect(uiAdvModule).toBeTruthy();
  });
});
