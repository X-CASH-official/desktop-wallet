import { dashboardModule } from './dashboard.module';

describe('dashboardModule', () => {
  let dashboardModule: dashboardModule;

  beforeEach(() => {
    dashboardModule = new dashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
