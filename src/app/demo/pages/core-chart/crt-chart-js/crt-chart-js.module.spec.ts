import { CrtChartJsModule } from './crt-chart-js.module';

describe('CrtChartJsModule', () => {
  let crtChartJsModule: CrtChartJsModule;

  beforeEach(() => {
    crtChartJsModule = new CrtChartJsModule();
  });

  it('should create an instance', () => {
    expect(crtChartJsModule).toBeTruthy();
  });
});
