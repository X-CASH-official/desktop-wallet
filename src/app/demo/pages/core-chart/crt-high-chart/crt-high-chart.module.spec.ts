import { CrtHighChartModule } from './crt-high-chart.module';

describe('CrtHighChartModule', () => {
  let crtHighChartModule: CrtHighChartModule;

  beforeEach(() => {
    crtHighChartModule = new CrtHighChartModule();
  });

  it('should create an instance', () => {
    expect(crtHighChartModule).toBeTruthy();
  });
});
