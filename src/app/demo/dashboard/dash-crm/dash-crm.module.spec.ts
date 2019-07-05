import { DashCrmModule } from './dash-crm.module';

describe('DashCrmModule', () => {
  let dashCrmModule: DashCrmModule;

  beforeEach(() => {
    dashCrmModule = new DashCrmModule();
  });

  it('should create an instance', () => {
    expect(dashCrmModule).toBeTruthy();
  });
});
