import { CrtGoogleChartModule } from './crt-google-chart.module';

describe('CrtGoogleChartModule', () => {
  let crtGoogleChartModule: CrtGoogleChartModule;

  beforeEach(() => {
    crtGoogleChartModule = new CrtGoogleChartModule();
  });

  it('should create an instance', () => {
    expect(crtGoogleChartModule).toBeTruthy();
  });
});
