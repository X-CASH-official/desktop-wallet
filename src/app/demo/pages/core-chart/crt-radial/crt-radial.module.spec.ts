import { CrtRadialModule } from './crt-radial.module';

describe('CrtRadialModule', () => {
  let crtRadialModule: CrtRadialModule;

  beforeEach(() => {
    crtRadialModule = new CrtRadialModule();
  });

  it('should create an instance', () => {
    expect(crtRadialModule).toBeTruthy();
  });
});
