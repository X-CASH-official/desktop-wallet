import { CrtPeityModule } from './crt-peity.module';

describe('CrtPeityModule', () => {
  let crtPeityModule: CrtPeityModule;

  beforeEach(() => {
    crtPeityModule = new CrtPeityModule();
  });

  it('should create an instance', () => {
    expect(crtPeityModule).toBeTruthy();
  });
});
