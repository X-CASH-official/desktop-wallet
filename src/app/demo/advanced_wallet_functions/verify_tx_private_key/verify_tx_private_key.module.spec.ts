import { verify_tx_private_keyModule } from './verify_tx_private_key.module';

describe('verify_tx_private_keyModule', () => {
  let verify_tx_private_keyModule: verify_tx_private_keyModule;

  beforeEach(() => {
    verify_tx_private_keyModule = new verify_tx_private_keyModule();
  });

  it('should create an instance', () => {
    expect(verify_tx_private_keyModule).toBeTruthy();
  });
});
