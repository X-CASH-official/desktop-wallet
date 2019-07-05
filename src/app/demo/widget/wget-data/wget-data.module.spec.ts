import { WgetDataModule } from './wget-data.module';

describe('WgetDataModule', () => {
  let wgetDataModule: WgetDataModule;

  beforeEach(() => {
    wgetDataModule = new WgetDataModule();
  });

  it('should create an instance', () => {
    expect(wgetDataModule).toBeTruthy();
  });
});
