import { MaintenOfflineUiModule } from './mainten-offline-ui.module';

describe('MaintenOfflineUiModule', () => {
  let maintenOfflineUiModule: MaintenOfflineUiModule;

  beforeEach(() => {
    maintenOfflineUiModule = new MaintenOfflineUiModule();
  });

  it('should create an instance', () => {
    expect(maintenOfflineUiModule).toBeTruthy();
  });
});
