import { get_tx_private_keyModule } from './get_tx_private_key.module';

describe('get_tx_private_keyModule', () => {
  let get_tx_private_keyModule: get_tx_private_keyModule;

  beforeEach(() => {
    get_tx_private_keyModule = new get_tx_private_keyModule();
  });

  it('should create an instance', () => {
    expect(get_tx_private_keyModule).toBeTruthy();
  });
});
