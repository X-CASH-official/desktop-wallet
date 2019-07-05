import { WgetStatisticModule } from './wget-statistic.module';

describe('WgetStatisticModule', () => {
  let wgetStatisticModule: WgetStatisticModule;

  beforeEach(() => {
    wgetStatisticModule = new WgetStatisticModule();
  });

  it('should create an instance', () => {
    expect(wgetStatisticModule).toBeTruthy();
  });
});
