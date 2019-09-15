import { wallet_menuModule } from './wallet_menu.module';

describe('wallet_menuModule', () => {
  let wallet_menuModule: wallet_menuModule;

  beforeEach(() => {
    wallet_menuModule = new wallet_menuModule();
  });

  it('should create an instance', () => {
    expect(wallet_menuModule).toBeTruthy();
  });
});
