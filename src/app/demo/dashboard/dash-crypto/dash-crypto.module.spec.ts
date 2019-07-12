import { DashCryptoModule } from './dash-crypto.module';

describe('DashCryptoModule', () => {
  let dashCryptoModule: DashCryptoModule;

  beforeEach(() => {
    dashCryptoModule = new DashCryptoModule();
  });

  it('should create an instance', () => {
    expect(dashCryptoModule).toBeTruthy();
  });
});
