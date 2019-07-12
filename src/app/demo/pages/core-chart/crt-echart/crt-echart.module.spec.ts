import { CrtEchartModule } from './crt-echart.module';

describe('CrtEchartModule', () => {
  let crtEchartModule: CrtEchartModule;

  beforeEach(() => {
    crtEchartModule = new CrtEchartModule();
  });

  it('should create an instance', () => {
    expect(crtEchartModule).toBeTruthy();
  });
});
