import { WgetChartsModule } from './wget-charts.module';

describe('WgetChartsModule', () => {
  let wgetChartsModule: WgetChartsModule;

  beforeEach(() => {
    wgetChartsModule = new WgetChartsModule();
  });

  it('should create an instance', () => {
    expect(wgetChartsModule).toBeTruthy();
  });
});
