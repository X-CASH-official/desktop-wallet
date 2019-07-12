import { DashAnalyticsModule } from './dash-analytics.module';

describe('DashAnalyticsModule', () => {
  let dashAnalyticsModule: DashAnalyticsModule;

  beforeEach(() => {
    dashAnalyticsModule = new DashAnalyticsModule();
  });

  it('should create an instance', () => {
    expect(dashAnalyticsModule).toBeTruthy();
  });
});
