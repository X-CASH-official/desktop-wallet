import { MaintenErrorModule } from './mainten-error.module';

describe('MaintenErrorModule', () => {
  let maintenErrorModule: MaintenErrorModule;

  beforeEach(() => {
    maintenErrorModule = new MaintenErrorModule();
  });

  it('should create an instance', () => {
    expect(maintenErrorModule).toBeTruthy();
  });
});
