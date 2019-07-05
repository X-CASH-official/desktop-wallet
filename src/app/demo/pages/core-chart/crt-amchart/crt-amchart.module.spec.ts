import { CrtAmchartModule } from './crt-amchart.module';

describe('CrtAmchartModule', () => {
  let crtAmchartModule: CrtAmchartModule;

  beforeEach(() => {
    crtAmchartModule = new CrtAmchartModule();
  });

  it('should create an instance', () => {
    expect(crtAmchartModule).toBeTruthy();
  });
});
