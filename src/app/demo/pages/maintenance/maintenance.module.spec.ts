import { MaintenanceModule } from './maintenance.module';

describe('MaintenanceModule', () => {
  let maintenanceModule: MaintenanceModule;

  beforeEach(() => {
    maintenanceModule = new MaintenanceModule();
  });

  it('should create an instance', () => {
    expect(maintenanceModule).toBeTruthy();
  });
});
