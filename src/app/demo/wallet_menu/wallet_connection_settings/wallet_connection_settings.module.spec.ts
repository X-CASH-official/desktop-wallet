import { wallet_connection_settingsModule } from './wallet_connection_settings.module';

describe('wallet_connection_settingsModule', () => {
  let wallet_connection_settingsModule: wallet_connection_settingsModule;

  beforeEach(() => {
    wallet_connection_settingsModule = new wallet_connection_settingsModule();
  });

  it('should create an instance', () => {
    expect(wallet_connection_settingsModule).toBeTruthy();
  });
});
